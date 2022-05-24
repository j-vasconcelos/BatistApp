import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DevocionaisService } from 'src/app/provider/devocionais-service.page';
import { DevocionalPage } from 'src/app/views/devocional/devocional.page';

@Component({
  selector: 'app-view-devocional',
  templateUrl: './view-devocional.component.html',
  styleUrls: ['./view-devocional.component.scss'],
})
export class ViewDevocionalComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
  private devocionalService: DevocionaisService, public alertController: AlertController, private devocionalPage: DevocionalPage) { }

  id = this.devocionalPage.id;
  devocional;

  ngOnInit() {
    this.findId();
  }

  findId(){
    if (this.id) {
      this.devocionalService.findID(parseInt(this.id)).subscribe((devocional) => {
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
            this.devocionalService.delete(this.id)
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

}
