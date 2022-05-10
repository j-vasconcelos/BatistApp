import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../provider/eventos-service.page';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  evento;
  constructor( 
    private route: ActivatedRoute, 
    private eventoService: EventosService) { }

  ngOnInit() {
    const eventoId = this.route.snapshot.paramMap.get('id');
    if (eventoId) {
      this.eventoService.getEvento(eventoId).then((evento) => {
        this.evento = evento;
      });
    }
  }

}