import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevocionaisPage } from './devocionais.page';

const routes: Routes = [
  {
    path: '',
    component: DevocionaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevocionaisPageRoutingModule {}
