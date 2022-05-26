import { EventosService } from './../../../provider/eventos-service.page';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EventoPage } from 'src/app/views/evento/evento.page';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss'],
})
export class EditarEventoComponent implements OnInit {

  evento;

  constructor(private route: ActivatedRoute, private router: Router,
    private eventoService: EventosService, public alertController: AlertController, public eventoPage: EventoPage) { }

  ngOnInit() {
    const eventoId = this.route.snapshot.paramMap.get('id');
    if (eventoId) {
      this.eventoService.findId(parseInt(eventoId)).subscribe((evento) => {
        this.evento = evento;
      });
    }
  }

  update(): void {
    this.eventoService.update(this.evento).subscribe((resposta) => {
      this.router.navigate(["app/eventos/"]);
      this.eventoPage.clickEdiar();
      this.eventoService.mensagem("Evento atualizado com sucesso");
    }, err => {
      this.eventoService.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.eventoPage.clickEdiar();
  }

}
