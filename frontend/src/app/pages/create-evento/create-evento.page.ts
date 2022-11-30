import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eventos } from 'src/app/modal/evento.modal';
import { EventosService } from 'src/app/provider/eventos-service.page';

@Component({
  selector: 'app-create-evento',
  templateUrl: './create-evento.page.html',
  styleUrls: ['./create-evento.page.scss'],
})
export class CreateEventoPage implements OnInit {
  
  evento: Eventos = {
    name: "",
    place: "",
    date: "",
    imgURL: ""
  }

  tipo: any;

  countryChange($event) {
    this.tipo = $event.target.value ;
  }

 

  constructor(private serviceEvento: EventosService, private router: Router) { }
  
  ngOnInit() {}

  create(): void {
    if(this.tipo == "online"){
      this.evento.name = "(Online) " + this.evento.name;
    }else if(this.tipo == "presencial"){
      this.evento.name = "(Presencial) " + this.evento.name;
    }

    if(this.evento.name != "" && this.evento.date != "" 
      && this.evento.place != ""){
        this.evento.imgURL = "https://bd-api.s3.sa-east-1.amazonaws.com/1669765125795.jfif";
        this.serviceEvento.createEvent(this.evento).subscribe((resposta) => {
          this.router.navigate(['app/evento'])
          this.serviceEvento.mensagem('Evento criado com sucesso!');
        }, err => {
          this.serviceEvento.mensagem('Validar se todos os campos estão preenchidos corretamente!')
        });
    }else{
      this.serviceEvento.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    }
  }

  cancel(): void{
    this.router.navigate(['app/evento']);
  }
}
