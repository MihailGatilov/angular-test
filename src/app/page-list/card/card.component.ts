import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public post: Post;

  constructor() { }

  ngOnInit(): void {
  }
}
