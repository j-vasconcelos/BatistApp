import { Component, OnInit } from '@angular/core';
import { Devocional } from 'src/app/modal/devocional.modal';
import { DevocionaisService } from 'src/app/provider/devocionais-service.page';

@Component({
  selector: 'app-devocionais',
  templateUrl: './devocionais.page.html',
  styleUrls: ['./devocionais.page.scss'],
})
export class DevocionaisPage implements OnInit {

  devocionais: Devocional[] = [];
  searchDevocional: string;
  
  constructor(private devocionalService: DevocionaisService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.devocionalService.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.devocionais = resposta;
    
    });
  }

}
