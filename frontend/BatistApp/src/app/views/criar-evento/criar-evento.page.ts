import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.page.html',
  styleUrls: ['./criar-evento.page.scss'],
})
export class CriarEventoPage implements OnInit {

  isShownOnline = false;
  isShownPresencial = false;
  isShownButtons = true;

  constructor() {}

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
