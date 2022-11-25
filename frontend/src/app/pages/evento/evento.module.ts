import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoPageRoutingModule } from './evento-routing.module';

import { EventoPage } from './evento.page';
import { LocalDateTimeModule } from 'src/app/pipe/local-date-time.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoPageRoutingModule,
    LocalDateTimeModule,
    Ng2SearchPipeModule
  ],
  declarations: [EventoPage]
})
export class EventoPageModule {}
