import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDevocionalPageRoutingModule } from './create-devocional-routing.module';

import { CreateDevocionalPage } from './create-devocional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDevocionalPageRoutingModule
  ],
  declarations: [CreateDevocionalPage]
})
export class CreateDevocionalPageModule {}
