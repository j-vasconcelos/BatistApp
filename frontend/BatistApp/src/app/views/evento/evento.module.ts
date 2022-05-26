import { EditarEventoComponent } from './../../components/evento/editar-evento/editar-evento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoPageRoutingModule } from './evento-routing.module';

import { EventoPage } from './evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoPageRoutingModule
  ],
  declarations: [EventoPage, EditarEventoComponent]
})
export class EventoPageModule {}
