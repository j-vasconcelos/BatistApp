import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticateService } from 'src/app/provider/authenticate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  user = this.authenticate.user;

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
}
