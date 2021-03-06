import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageCardComponent } from './page-card/page-card.component';
import { CardComponent } from './page-list/card/card.component';
import { FiltrationPanelComponent } from './page-list/filtration-panel/filtration-panel.component';
import {SearchPipe} from './page-list/search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    PageCardComponent,
    CardComponent,
    FiltrationPanelComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
