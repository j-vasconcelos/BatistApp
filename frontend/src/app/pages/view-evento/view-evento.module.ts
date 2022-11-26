import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEventoPageRoutingModule } from './view-evento-routing.module';

import { ViewEventoPage } from './view-evento.page';
import { SharedModule } from 'src/app/components/shared.module';
import { LocalDateTimeModule } from 'src/app/pipe/local-date-time.module';
import { EditarComponent } from 'src/app/components/evento/editar/editar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEventoPageRoutingModule,
    SharedModule,
    LocalDateTimeModule
  ],
  declarations: [ViewEventoPage, EditarComponent]
})
export class ViewEventoPageModule {}
