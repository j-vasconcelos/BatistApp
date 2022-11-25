import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevocionalPageRoutingModule } from './devocional-routing.module';

import { DevocionalPage } from './devocional.page';
import { LocalDateTimeModule } from 'src/app/pipe/local-date-time.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevocionalPageRoutingModule,
    LocalDateTimeModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [DevocionalPage]
})
export class DevocionalPageModule {}
