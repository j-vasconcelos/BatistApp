import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEventoPageRoutingModule } from './view-evento-routing.module';

import { ViewEventoPage } from './view-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEventoPageRoutingModule
  ],
  declarations: [ViewEventoPage]
})
export class ViewEventoPageModule {}
