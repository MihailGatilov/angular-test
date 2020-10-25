import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtration-panel',
  templateUrl: './filtration-panel.component.html',
  styleUrls: ['./filtration-panel.component.scss']
})
export class FiltrationPanelComponent implements OnInit {
  searchName=''

  constructor() { }

  ngOnInit(): void {
  }

}
