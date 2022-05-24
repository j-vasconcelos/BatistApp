import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevocionalPageRoutingModule } from './devocional-routing.module';

import { DevocionalPage } from './devocional.page';
import { EditarDevocionalComponent } from 'src/app/components/devocional/editar-devocional/editar-devocional.component';
import { ViewDevocionalComponent } from 'src/app/components/devocional/view-devocional/view-devocional.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevocionalPageRoutingModule
  ],
  declarations: [DevocionalPage, EditarDevocionalComponent, ViewDevocionalComponent]
})
export class DevocionalPageModule {}
