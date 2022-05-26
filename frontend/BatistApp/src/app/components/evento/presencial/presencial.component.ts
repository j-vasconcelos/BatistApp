import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Eventos } from 'src/app/modal/evento.modal';
import { EventosService } from 'src/app/provider/eventos-service.page';
import { CriarEventoPage } from 'src/app/views/criar-evento/criar-evento.page';

@Component({
  selector: 'app-presencial',
  templateUrl: './presencial.component.html',
  styleUrls: ['./presencial.component.scss'],
})
export class PresencialComponent {

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  evento: Eventos = {
    nome: '',
    local: '',
    data: '',
    horario: ''  
  }

  constructor(private serviceEvento: EventosService, private criarEvento: CriarEventoPage,
    private router: Router) { }

  create(): void {
    this.serviceEvento.create(this.evento).subscribe((resposta) => {
      this.router.navigate(['app/eventos'])
      this.serviceEvento.mensagem('Evento criado com sucesso!');
    }, err => {
      this.serviceEvento.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel() {
    this.criarEvento.formPresencial();
  }
}
