import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-evento',
  templateUrl: './create-evento.page.html',
  styleUrls: ['./create-evento.page.scss'],
})
export class CreateEventoPage implements OnInit {

  isShownOnline = false;
  isShownPresencial = false;
  isShownButtons = true;

  constructor() { }

  ngOnInit() {
  }

  formOnline(){
    this.isShownOnline = !this.isShownOnline;
    this.showButtons();
  }

  formPresencial(){
    this.isShownPresencial = !this.isShownPresencial;
    this.showButtons();
  }

  showButtons(){
    this.isShownButtons = !this.isShownButtons;
  }
  
}
