import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCardComponent } from './page-card/page-card.component';
import { FiltrationPanelComponent } from './page-list/filtration-panel/filtration-panel.component';
import { PageListComponent } from './page-list/page-list.component';

const routes: Routes = [
  {
    path: '', component: PageListComponent, children:
    [
      {path: '', component: FiltrationPanelComponent}
    ]
  },
    {path: 'card', component: PageCardComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
