import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtration-panel',
  templateUrl: './filtration-panel.component.html',
  styleUrls: ['./filtration-panel.component.scss']
})
export class FiltrationPanelComponent implements OnInit {
  @Output() searchName = new EventEmitter();

  public searchNameString = '';

  constructor() { }

  ngOnInit(): void {
  }

  public nameSearch(): void {
    this.searchName.emit(this.searchNameString);
  }
}

export class ReactiveRadioButtonComp{
  
}
