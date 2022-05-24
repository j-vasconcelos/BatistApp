import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eventos } from 'src/app/modal/evento.modal';
import { EventosService } from 'src/app/provider/eventos-service.page';
import { CriarEventoPage } from 'src/app/views/criar-evento/criar-evento.page';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss'],
})
export class OnlineComponent implements OnInit {
  
  evento: Eventos = {
    nome: '',
    local: '',
    data: '',
    horario: ''  
  }

  constructor(private serviceEvento: EventosService, private criarEvento: CriarEventoPage,
    private router: Router) { }

  ngOnInit() {}

  create(): void {
    this.serviceEvento.create(this.evento).subscribe((resposta) => {
      this.router.navigate(['app/eventos'])
      this.serviceEvento.mensagem('Evento criado com sucesso!');
    }, err => {
      this.serviceEvento.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel() {
    this.criarEvento.formOnline();
  }

}
