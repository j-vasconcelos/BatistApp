import { Devocional } from './../../modal/devocional.modal';
import { Component, OnInit } from '@angular/core';
import { DevocionaisService } from 'src/app/provider/devocionais-service.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-criar-devocional',
  templateUrl: './criar-devocional.page.html',
  styleUrls: ['./criar-devocional.page.scss'],
})
export class CriarDevocionalPage implements OnInit {

  devocional: Devocional = {
    tituloDevocional: '',
    textoVersiculo: '',
    textoDevocional: '',
    textoOracao: '',
    dataPostagem: '',
    horaPostagem: ''
  };

  constructor(private devocionalService: DevocionaisService, private router: Router) { }

  ngOnInit(){
  }

  postDevocional(): void {
    this.devocionalService.create(this.devocional).subscribe((resposta) => {
      this.router.navigate(['app/devocionais']);
      console.log("Devocional criado com sucesso!");
      //this.devocionalService.mensagem('Devocional criado com sucesso!');
    },  err => {
      //this.devocionalService.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['app/devocionais'])
  }


}
