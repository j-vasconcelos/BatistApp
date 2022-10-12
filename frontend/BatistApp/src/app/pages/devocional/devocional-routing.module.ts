import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevocionalPage } from './devocional.page';

const routes: Routes = [
  {
    path: '',
    component: DevocionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevocionalPageRoutingModule {}
