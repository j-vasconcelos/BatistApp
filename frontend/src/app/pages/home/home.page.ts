import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Moment } from 'moment';
import { Devocional } from 'src/app/modal/devocional.modal';
import { Eventos } from 'src/app/modal/evento.modal';
import { DevocionaisService } from 'src/app/provider/devocionais-service.page';
import { EventosService } from 'src/app/provider/eventos-service.page';

import SwiperCore, { Pagination } from "swiper";
import Swiper from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  devocionais: Devocional[] = []
  eventos: Eventos[] = [];
  devocionalDate: any;

  data: String;
  dataDev: String;


  today = new Date();
  changedDate = '';
  pipe = new DatePipe('pt-br');
  changeFormatHome(today){
    let ChangedFormat = this.pipe.transform(this.today, 'EEEE, dd MMM y');
    this.changedDate = ChangedFormat;
    return this.changedDate;
  }

  changeFormatDevocional(today){
    let ChangedFormat = this.pipe.transform(this.today, 'dd/MM/YYYY');
    this.changedDate = ChangedFormat;
    return this.changedDate;
  }

  constructor(private devocionalService: DevocionaisService, private eventoService: EventosService, private route: ActivatedRoute) { 
    route.params.subscribe(val => this.findAll())
    console.log(this.devocionais)
    
  }

  ngOnInit() {
    this.findAll();
    this.data = this.changeFormatHome(this.today).toString();
    this.dataDev = this.changeFormatDevocional(this.today).toString();
  }

  findAll() {
    this.devocionalService.findAll().subscribe((resposta) => {
      this.devocionais = resposta;  
    });

    this.eventoService.findAll().subscribe((resposta) => {
      this.eventos = resposta;    
    });
    
  }

}
