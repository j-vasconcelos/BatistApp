import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEventoPage } from './create-evento.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEventoPageRoutingModule {}
