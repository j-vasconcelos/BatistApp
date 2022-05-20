import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.page.html',
  styleUrls: ['./criar-evento.page.scss'],
})
export class CriarEventoPage implements OnInit {

  isShownOnline = false;
  isShownPresencial = false;

  constructor() {}

  ngOnInit() {
  }

  formOnline(){
    this.isShownOnline = !this.isShownOnline;
  }

  formPresencial(){
    this.isShownPresencial = !this.isShownPresencial;
  }
  
}
