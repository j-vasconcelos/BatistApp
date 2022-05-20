import { PresencialComponent } from './../../components/evento/presencial/presencial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarEventoPageRoutingModule } from './criar-evento-routing.module';

import { CriarEventoPage } from './criar-evento.page';
import { OnlineComponent } from 'src/app/components/evento/online/online.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarEventoPageRoutingModule
  ],
  declarations: [CriarEventoPage, PresencialComponent, OnlineComponent]
})
export class CriarEventoPageModule {}
