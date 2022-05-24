import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DevocionaisService } from 'src/app/provider/devocionais-service.page';
import { EventosService } from 'src/app/provider/eventos-service.page';

@Component({
  selector: 'app-devocional',
  templateUrl: './devocional.page.html',
  styleUrls: ['./devocional.page.scss'],
})
export class DevocionalPage implements OnInit {

  isShownEditar = false;
  isShownView = true;

  id = this.route.snapshot.paramMap.get('id');

  devocional;
  constructor(private route: ActivatedRoute, private router: Router,
  private devocionalService: DevocionaisService, public alertController: AlertController) {
    route.params.subscribe(val => this.findId())
  }

  ngOnInit() {
    this.findId();
  }

  findId(){
    const devocionalId = this.route.snapshot.paramMap.get('id');
    if (devocionalId) {
      this.devocionalService.findID(parseInt(devocionalId)).subscribe((devocional) => {
        this.devocional = devocional;
      });
    }
  }

  async deleteDevocional() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Confirmar exclusão!',
      message: 'Deseja realmente excluir o devocional?',
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
            this.devocionalService.delete(this.route.snapshot.paramMap.get('id'))
            .subscribe({
              next: (res) => {
                //console.log(res);
                this.router.navigate(['app/devocionais']);
                this.devocionalService.mensagem('Devocional deletado com sucesso!');
              },
              error: (e) => {
                this.devocionalService.mensagem('Não foi possível deletar, por favor tente novamente!');
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

}
