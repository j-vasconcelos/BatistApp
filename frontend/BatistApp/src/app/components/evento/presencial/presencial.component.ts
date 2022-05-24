import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { CriarEventoPage } from 'src/app/views/criar-evento/criar-evento.page';

@Component({
  selector: 'app-presencial',
  templateUrl: './presencial.component.html',
  styleUrls: ['./presencial.component.scss'],
})
export class PresencialComponent {

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  private dateValue: any;

  constructor(private criarEvento: CriarEventoPage) {}

  cancel() {
    this.criarEvento.formPresencial();
  }

  get date(): any {
    return this.dateValue;
  }
  
  set date(value: any) {
    console.log({ value });
    this.dateValue = value;
  }

}
