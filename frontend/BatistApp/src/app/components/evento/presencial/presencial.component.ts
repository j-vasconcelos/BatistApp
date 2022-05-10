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

  dateValue = '';

  constructor() {}

  formatDate(value: string) {
    return format(parseISO(value), 'dd/MM/yyyy - HH:mm');
  }

  isDateEnabled(dateIsoString: string) {
    const date = new Date(dateIsoString);
    if (getDate(date) === 1 && getMonth(date) === 0 && getYear(date) === 2022) {
      // Disables January 1, 2022.
      return false;
    }
    return true;
  }

}
