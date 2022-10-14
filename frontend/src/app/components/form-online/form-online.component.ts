import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateEventoPage } from 'src/app/pages/create-evento/create-evento.page';

@Component({
  selector: 'app-form-online',
  templateUrl: './form-online.component.html',
  styleUrls: ['./form-online.component.scss'],
})
export class FormOnlineComponent implements OnInit {

  constructor(private router: Router, private createEvento: CreateEventoPage) { }

  ngOnInit() {}

  cancel(): void{
    this.createEvento.formOnline();
  }
}
