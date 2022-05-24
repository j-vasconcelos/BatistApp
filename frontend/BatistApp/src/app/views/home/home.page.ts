import { Eventos } from './../../modal/evento.modal';
import { Component, OnInit } from '@angular/core';
import { DevocionaisService } from 'src/app/provider/devocionais-service.page';
import { EventosService } from 'src/app/provider/eventos-service.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  slideOptsTop = {
    spaceBetween: 0,
    slidesPerView: 1.15,
  };

  slideOptsThumbs = {
    spaceBetween: 0,
    slidesPerView: 2.65,
  };

  devocional;

  eventos: Eventos[] = [];

  today: number = Date.now();

  constructor(private devocionalService: DevocionaisService, 
    private eventoService: EventosService) {}

  ngOnInit(): void {
    this.findRecent();
    this.findAll();
  }

  findAll() {
    this.eventoService.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.eventos = resposta;
    });
  }
  
  findRecent() {
    this.devocionalService.findID(1).subscribe((devocional) => {
      this.devocional = devocional;
    });
  }

//console.log('The year is = ' + myDate.getFullYear());
//console.log('The month is = ' + myDate.getMonth());
//console.log('The date is = ' + myDate.getDate());
//console.log(myDate.toLocaleString("pt-BR"));
//console.log('The minutes are = ' + myDate.getMinutes());
//console.log('The seconds are = ' + myDate.getSeconds());

  /*slideOpts: {
    spaceBetween: 0,
    slidesPerView: 1.15,  
  };*/

  /*slideOpt: {
    direction: 'vertical',
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
    }
  }*/
  
  
}
