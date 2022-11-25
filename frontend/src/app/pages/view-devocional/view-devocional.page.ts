import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoUpdateMethod } from '@capacitor/cli';
import { AlertController } from '@ionic/angular';
import { Devocional } from 'src/app/modal/devocional.modal';
import { AuthenticateService } from 'src/app/provider/authenticate.service';
import { DevocionaisService } from 'src/app/provider/devocionais-service.page';

@Component({
  selector: 'app-view-devocional',
  templateUrl: './view-devocional.page.html',
  styleUrls: ['./view-devocional.page.scss'],
})
export class ViewDevocionalPage implements OnInit {

  isShownEditar = false;
  isShownView = true;
  isShownButtons = this.authenticate.adm;

  devocional: Devocional = {
    id:0,
    devotionalTitle: '',
    textVersicle: '',
    devotionalText: '',
    prayerText: '',
    postDate: '',   
    imgURL: ''
  }

  constructor(
    private service: DevocionaisService,
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    private authenticate: AuthenticateService
  ) {}

  ngOnInit(): void {
    this.devocional.id = this.route.snapshot.params['id']
    this.findById();
  }

  findById(): void {
    this.service.findById(this.devocional.id!).subscribe((resposta) => {    
      this.devocional.devotionalTitle = resposta.devotionalTitle
      this.devocional.textVersicle= resposta.textVersicle
      this.devocional.devotionalText = resposta.devotionalText
      this.devocional.prayerText = resposta.prayerText
      this.devocional.postDate = resposta.postDate     
      this.devocional.imgURL = resposta.imgURL
    })
  }

  clickEditar(){
    this.isShownEditar = !this.isShownEditar;
    this.isShownView = !this.isShownView;
  }

  async delete() {
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
            this.service.delete(this.devocional.id!)
            .subscribe({
              next: (res) => {
                //console.log(res);
                this.router.navigate(['app/devocional']);
                this.service.mensagem('Devocional excluído com sucesso!');
              },
              error: (e) => {
                this.service.mensagem('Erro ao excluír, por favor tente novamente!');
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
