import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReversePipe } from 'ngx-pipes';
import { Devocional } from 'src/app/modal/devocional.modal';
import { AuthenticateService } from 'src/app/provider/authenticate.service';
import { DevocionaisService } from 'src/app/provider/devocionais-service.page';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'app-devocional',
  templateUrl: './devocional.page.html',
  styleUrls: ['./devocional.page.scss'],
  providers: [ReversePipe]
})
export class DevocionalPage implements OnInit {

  filterCards: string;

  devocionais: Devocional[] = [];

  isShownButtons = this.authenticate.adm;

  constructor(private devocionalService: DevocionaisService, private route: ActivatedRoute, private authenticate: AuthenticateService) { 
    route.params.subscribe(val => this.findAll())
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.devocionalService.findAll().subscribe((resposta) => {
      //console.log(resposta);
      this.devocionais = resposta;    
    });
  }

}
