import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarDevocionalPageRoutingModule } from './criar-devocional-routing.module';

import { CriarDevocionalPage } from './criar-devocional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarDevocionalPageRoutingModule
  ],
  declarations: [CriarDevocionalPage]
})
export class CriarDevocionalPageModule {}
