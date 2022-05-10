import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../provider/eventos-service.page';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  eventos: any;
  searchEvent: string;
  
  constructor(private eventoService: EventosService) { }

  ngOnInit() {
    this.eventoService.getEventos().then(data => {
      this.eventos = data;
    });
  }

}
