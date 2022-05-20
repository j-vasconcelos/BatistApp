import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevocionaisPageRoutingModule } from './devocionais-routing.module';

import { DevocionaisPage } from './devocionais.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevocionaisPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [DevocionaisPage, HeaderComponent]
})
export class DevocionaisPageModule {}
