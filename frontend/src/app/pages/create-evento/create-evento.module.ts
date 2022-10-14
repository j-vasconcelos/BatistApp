import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEventoPageRoutingModule } from './create-evento-routing.module';

import { CreateEventoPage } from './create-evento.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEventoPageRoutingModule,
    SharedModule
  ],
  declarations: [CreateEventoPage]
})
export class CreateEventoPageModule {}
