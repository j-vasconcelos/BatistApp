import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDevocionalPage } from './create-devocional.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDevocionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDevocionalPageRoutingModule {}
