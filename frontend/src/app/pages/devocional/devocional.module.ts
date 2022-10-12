import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevocionalPageRoutingModule } from './devocional-routing.module';

import { DevocionalPage } from './devocional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevocionalPageRoutingModule
  ],
  declarations: [DevocionalPage]
})
export class DevocionalPageModule {}
