import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosPageRoutingModule } from './eventos-routing.module';

import { EventosPage } from './eventos.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent} from './../../components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    EventosPage,
    HeaderComponent]
})
export class EventosPageModule {}
