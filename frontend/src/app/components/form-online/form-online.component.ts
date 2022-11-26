import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eventos } from 'src/app/modal/evento.modal';
import { CreateEventoPage } from 'src/app/pages/create-evento/create-evento.page';
import { EventosService } from 'src/app/provider/eventos-service.page';

@Component({
  selector: 'app-form-online',
  templateUrl: './form-online.component.html',
  styleUrls: ['./form-online.component.scss'],
})
export class FormOnlineComponent implements OnInit {

  evento: Eventos = {
    name: "",
    place: "",
    date: "",
    imgURL: ""
  }

  constructor(private serviceEvento: EventosService, private router: Router, private createEvento: CreateEventoPage) { }

  ngOnInit() {}

  create(): void {
    this.evento.name = "(Online) " + this.evento.name;
    console.log(this.evento.name)
    this.evento.imgURL = "https://bd-api.s3.sa-east-1.amazonaws.com/1667958700321.jpg";
    this.serviceEvento.createEvent(this.evento).subscribe((resposta) => {
      this.router.navigate(['app/eventos'])
      this.serviceEvento.mensagem('Evento criado com sucesso!');
    }, err => {
      this.serviceEvento.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void{
    this.router.navigate(['app/evento']);
  }
}
