import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../provider/eventos-service.page';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  eventos;
  searchEvent: string;
  
  constructor(private eventoService: EventosService, private route:ActivatedRoute) {
    route.params.subscribe(val => this.findAll())
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.eventoService.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.eventos = resposta;    
    });
  }

}
