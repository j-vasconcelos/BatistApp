import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EventosService } from 'src/app/provider/eventos-service.page';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  evento;
  constructor( private route: ActivatedRoute, private router: Router,
    private eventoService: EventosService, public alertController: AlertController) { }

  ngOnInit() {
    this.findId();
  }

  findId(){
    const eventoId = this.route.snapshot.paramMap.get('id');
    if (eventoId) {
      this.eventoService.findId(parseInt(eventoId)).subscribe((evento) => {
        this.evento = evento;
      });
    }
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

}