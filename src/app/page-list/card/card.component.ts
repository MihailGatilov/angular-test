import { Component, OnInit } from '@angular/core';


export interface Post {
  title: string
  port: string
  type: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  posts: Post[] = [
    {title: 'GO Ms Chief', port: 'Port Canaveral', type:'High Speed Craft'},
    {title: 'A Shortfall of Gravitas', port: 'Port Canaveral', type:'Barge'},
    {title: 'American Islander', port: 'Port of Los Angeles', type:'Cargo'},
    {title: 'Hollywood', port: 'Fort Lauderdale', type:'Tugft'},
    {title: 'Of Course I Still Love You', port: 'Port Canaveral', type:'Barge'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
