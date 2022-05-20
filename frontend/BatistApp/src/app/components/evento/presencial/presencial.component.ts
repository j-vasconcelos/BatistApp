import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-presencial',
  templateUrl: './presencial.component.html',
  styleUrls: ['./presencial.component.scss'],
})
export class PresencialComponent {


  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  private dateValue: any;

  constructor() {}

  get date(): any {
    return this.dateValue;
  }
  
  set date(value: any) {
    console.log({ value });
    this.dateValue = value;
  }

}
