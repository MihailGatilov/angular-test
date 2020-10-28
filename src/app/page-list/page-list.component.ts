import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../shared/interfaces/post';
import { DataService } from '../shared/services/data.service';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
    ships: any[];
    loading = true;
    error: any;

  public posts$: BehaviorSubject<Post[]>;

  constructor(
    private dataService: DataService,
    private apollo: Apollo
  ) 
  {
    this.posts$ = dataService.posts$;
  }

  ngOnInit(): void {
    this.apollo
      .query<any>({
        query: gql`
          {
            ships {
              id
              name
              type
              home_port
              weight_kg
              year_built
            }
          }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          this.ships = data && data.books;
          this.loading = loading;
        }
      );
  }

  public searchName(lookup: string): void {
    console.log(lookup)
    this.dataService.nameFilter(lookup);
  }
}





// инпут -> подписка на изменения значения -> эмитим в родитель PageListComponent -> выполняем поиск через сервис DataService;