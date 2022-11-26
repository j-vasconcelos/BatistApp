import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticateService } from 'src/app/provider/authenticate.service';
import { Thumbs } from 'swiper';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  user = this.authenticate.user;
  email = this.authenticate.email;
  senha = this.authenticate.senha;
  imagem = this.authenticate.imagem;


  constructor(private alertController: AlertController, private router: Router, private authenticate: AuthenticateService) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Deseja realmente sair?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Não',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Sim',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.router.navigate(['/']);
          }
        },
      ],
    });

    await alert.present();
  }

  async presentPrompt() {
    const alert = await this.alertController.create({
      header: 'Editar Perfil',
      inputs: [
        {
          label: 'Nome',
          name: 'Nome',
          value: this.user
        },
        {
          name: 'Email',
          value: this.email
        },
        {
          name: 'Senha',
          placeholder: 'Senha',
          type: 'password'
        },
        {
          name: 'Confirmar Senha',
          placeholder: 'Confirmar Senha',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Editar',
          role: 'confirm',
          handler: data => {
            
          }
        }
      ]
    });
    await alert.present();

      const { role } = await alert.onDidDismiss();
      if(role == "confirm"){
        this.confirmAlert();
      }

      await alert.present();
  }

  async confirmAlert() {
    const alert = await this.alertController.create({
      header: 'Dados alterados com sucesso"',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
