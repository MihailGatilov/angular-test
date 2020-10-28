import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/interfaces/post';
import { Apollo, QueryRef } from "apollo-angular";
import gql from "graphql-tag";

// const shipQuery = gql`
//   query Ship($type: FeedType!, $offset: Int, $limit: Int) {
//     currentUser {
//       login
//     }
//     ship(type: $type, offset: $offset, limit: $limit) {
//       id
//       # ...
//     }
//   }
// `;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  ships: any[];
  // shipQuery: QueryRef<any>
  loading = true;
  error: any;
  // type: string;
  // itemsPerPage: number = 10;

  @Input() public post: Post;

  constructor(
    private apollo: Apollo
  ) { }

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
          this.ships = data && data.ships;
          this.loading = loading;
        }
      );
    
      // this.shipQuery = this.apollo.watchQuery<any>({
      //   query: shipQuery,
      //   variables: {
      //     type: this.type,
      //     offset: 0,
      //     limit: this.itemsPerPage,
      //   },
      //   fetchPolicy: 'network-only',
      // }); 
      // this.ships= this.shipQuery
      //   .valueChanges
      //     .subscribe(({data}) => {
      //   this.ships = data.ships;
      // }); 


  }
}
