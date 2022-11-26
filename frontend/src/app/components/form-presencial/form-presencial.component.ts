import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateEventoPage } from 'src/app/pages/create-evento/create-evento.page';
import { EventosService } from 'src/app/provider/eventos-service.page';
import { Eventos } from 'src/app/modal/evento.modal';

@Component({
  selector: 'app-form-presencial',
  templateUrl: './form-presencial.component.html',
  styleUrls: ['./form-presencial.component.scss'],
})
export class FormPresencialComponent implements OnInit {

  evento: Eventos = {
    name: "",
    place: "",
    date: "",
    imgURL: ""
  }

  focused: boolean;

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  constructor(private serviceEvento: EventosService, private router: Router, private createEvento: CreateEventoPage) { }

  ngOnInit() {}

  create(): void {
    this.evento.name = "(Presencial) " + this.evento.name;
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
