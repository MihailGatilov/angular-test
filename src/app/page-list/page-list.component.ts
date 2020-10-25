import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../shared/interfaces/post';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  public posts$: BehaviorSubject<Post[]>;

  constructor(
    private dataService: DataService,
  ) {
    this.posts$ = dataService.posts$;
  }

  ngOnInit(): void {
  }

  public searchName(lookup: string): void {
    console.log(lookup)
    this.dataService.nameFilter(lookup);
  }
}


// инпут -> подписка на изменения значения -> эмитим в родитель PageListComponent -> выполняем поиск через сервис DataService;