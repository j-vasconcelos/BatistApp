import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Eventos } from 'src/app/modal/evento.modal';
import { AuthenticateService } from 'src/app/provider/authenticate.service';
import { EventosService } from 'src/app/provider/eventos-service.page';

@Component({
  selector: 'app-view-evento',
  templateUrl: './view-evento.page.html',
  styleUrls: ['./view-evento.page.scss'],
})
export class ViewEventoPage implements OnInit {

  evento: Eventos = {
    id:0,    
    name: "",
    place: "",
    date: "",    
    imgURL: "",     
  }

  status: String = "Eu Vou";

  isShownEditar = false;
  isShownView = true;
  isShownButtons = this.authenticate.adm;

  constructor( private route: ActivatedRoute, private router: Router,
    private eventoService: EventosService, public alertController: AlertController,
    private authenticate: AuthenticateService ) { }

    ngOnInit(): void {
      this.evento.id = this.route.snapshot.params['id']
       this.findById()
       console.log(this.status)
     }
   
    findById(): void {
      this.eventoService.findById(this.evento.id!).subscribe((resposta) => {
        this.evento.name = resposta.name
        this.evento.place = resposta.place
        this.evento.date = resposta.date     
        this.evento.imgURL = resposta.imgURL   
      })
    }

  async deleteEvento() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Confirmar exclusão!',
      message: 'Deseja realmente excluir o evento?',
      buttons: [
        {
          text: 'Não',
          role: 'Não',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            //console.log('Cancelado');
          }
        }, {
          text: 'Sim',
          id: 'confirm-button',
          handler: () => {
            this.eventoService.delete(parseInt(this.route.snapshot.paramMap.get('id')))
            .subscribe({
              next: (res) => {
                //console.log(res);
                this.router.navigate(['app/eventos']);
                this.eventoService.mensagem('Evento deletado com sucesso!');
              },
              error: (e) => {
                this.eventoService.mensagem('Não foi possível deletar, por favor tente novamente!');
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }

  clickEdiar(){
    this.isShownEditar = !this.isShownEditar;
    this.isShownView = !this.isShownView;
  }

  setStatus(){
    this.status = "Inscrito"
  }

}
