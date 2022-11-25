import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalDateTimePipe } from './local-date-time.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LocalDateTimePipe
  ],
  declarations: [
    LocalDateTimePipe
  ]
})
export class LocalDateTimeModule { }