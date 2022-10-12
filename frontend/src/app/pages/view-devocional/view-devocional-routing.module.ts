import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDevocionalPage } from './view-devocional.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDevocionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDevocionalPageRoutingModule {}
