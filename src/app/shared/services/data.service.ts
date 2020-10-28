import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../interfaces/post';

const POSTS: Post[] = [
  {name: 'GO Ms Chief', home_port: 'Port Canaveral', type: 'High Speed Craft'},
  {name: 'A Shortfall of Gravitas', home_port: 'Port Canaveral', type: 'Barge'},
  {name: 'American Islander', home_port: 'Port of Los Angeles', type: 'Cargo'},
  {name: 'Hollywood', home_port: 'Fort Lauderdale', type: 'Tugft'},
  {name: 'Of Course I Still Love You', home_port: 'Port Canaveral', type: 'Barge'},
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public posts$: BehaviorSubject<Post[]>;

  constructor() {
    this.posts$ = new BehaviorSubject<Post[]>(POSTS);
  }

  public nameFilter(lookup: string): void {
    let result: Post[];

    !lookup ?
      result = POSTS :
      result = POSTS.filter(post => {
        return post.name.toLowerCase().includes(lookup.toLowerCase());
      });

    this.posts$.next(result);
  }


}
