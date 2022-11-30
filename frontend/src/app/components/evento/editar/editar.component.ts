import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Eventos } from 'src/app/modal/evento.modal';
import { ViewEventoPage } from 'src/app/pages/view-evento/view-evento.page';
import { AuthenticateService } from 'src/app/provider/authenticate.service';
import { EventosService } from 'src/app/provider/eventos-service.page';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {

  evento: Eventos = {
    id:0,    
    name: "",
    place: "",
    date: "",    
    imgURL: "",     
  }

  constructor( private route: ActivatedRoute, private router: Router,
    private eventoService: EventosService, public alertController: AlertController,
    private authenticate: AuthenticateService, private vieweventopage: ViewEventoPage ) { }

    ngOnInit(): void {
      this.evento.id = this.route.snapshot.params['id']
       this.findById()
     }
   
    findById(): void {
      this.eventoService.findById(this.evento.id!).subscribe((resposta) => {
        this.evento.name = resposta.name
        this.evento.place = resposta.place
        this.evento.date = resposta.date     
        this.evento.imgURL = resposta.imgURL   
      })
    }

    update(): void {
      if(this.evento.name != "" && this.evento.place != "" 
      && this.evento.date != ""){
        this.eventoService.update(this.evento).subscribe((resposta) => {
          this.router.navigate(["app/evento"]);
          
          this.vieweventopage.clickEditar();
          this.eventoService.mensagem("Devocional atualizado com sucesso");
        }, err => {
          this.eventoService.mensagem('Validar se todos os campos estão preenchidos corretamente!')
        });
      }else{
        this.eventoService.mensagem('Validar se todos os campos estão preenchidos corretamente!')
      }
      
    }

    cancel(): void{
      this.vieweventopage.clickEditar();
    }
}
