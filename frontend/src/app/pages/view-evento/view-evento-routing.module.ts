import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEventoPage } from './view-evento.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEventoPageRoutingModule {}
