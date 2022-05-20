import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarDevocionalPage } from './criar-devocional.page';

const routes: Routes = [
  {
    path: '',
    component: CriarDevocionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarDevocionalPageRoutingModule {}
