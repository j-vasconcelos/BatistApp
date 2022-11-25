import { Component, OnInit } from '@angular/core';
import { Eventos } from '../../modal/evento.modal';
import { EventosService } from 'src/app/provider/eventos-service.page';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from 'src/app/provider/authenticate.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  eventos: Eventos[] = [];

  isShownButtons = this.authenticate.adm;

  constructor(private eventoService: EventosService, private route: ActivatedRoute, private authenticate: AuthenticateService) { 
    route.params.subscribe(val => this.findAll())
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.eventoService.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.eventos = resposta;    
    });
  }

  
}