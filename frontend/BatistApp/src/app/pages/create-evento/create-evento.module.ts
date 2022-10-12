import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEventoPageRoutingModule } from './create-evento-routing.module';

import { CreateEventoPage } from './create-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEventoPageRoutingModule
  ],
  declarations: [CreateEventoPage]
})
export class CreateEventoPageModule {}
