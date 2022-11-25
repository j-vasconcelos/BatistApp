import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDevocionalPageRoutingModule } from './view-devocional-routing.module';

import { ViewDevocionalPage } from './view-devocional.page';
import { LocalDateTimeModule } from 'src/app/pipe/local-date-time.module';
import { EditarComponent } from 'src/app/components/devocional/editar/editar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDevocionalPageRoutingModule,
    LocalDateTimeModule
  ],
  declarations: [ViewDevocionalPage, EditarComponent]
})
export class ViewDevocionalPageModule {}
