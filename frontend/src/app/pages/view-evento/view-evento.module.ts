import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEventoPageRoutingModule } from './view-evento-routing.module';

import { ViewEventoPage } from './view-evento.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEventoPageRoutingModule,
    SharedModule
  ],
  declarations: [ViewEventoPage]
})
export class ViewEventoPageModule {}
