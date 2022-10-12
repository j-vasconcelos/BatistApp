import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDevocionalPageRoutingModule } from './view-devocional-routing.module';

import { ViewDevocionalPage } from './view-devocional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDevocionalPageRoutingModule
  ],
  declarations: [ViewDevocionalPage]
})
export class ViewDevocionalPageModule {}
