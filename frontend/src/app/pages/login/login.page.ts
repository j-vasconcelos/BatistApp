import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticateService } from 'src/app/provider/authenticate.service';
import { User } from 'src/app/modal/user';
import { DevocionalPage } from '../devocional/devocional.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private login : FormGroup;
  autoLogin: boolean;

  user: any;


	constructor(private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private alertController: AlertController,
        private authenticate: AuthenticateService,
        public loadingController: LoadingController,
        public navCtrl: NavController){
          this.login = new FormGroup({
            email: new FormControl('pastorclaudio@batistapp.com', Validators.compose([
              Validators.required,
              Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            senha: new FormControl('pastor123', Validators.required),
          });
		}

	ngOnInit() {
    this.authenticate.getUsers().then(data => {
      this.user = data;
    });

    
	}

	logForm() {
    if(this.login.value.email != "" || this.login.value.senha != ""){
      this.autoLogin = false;
      for (var i of this.user) {
        if(i.email == this.login.value.email.toLowerCase() 
            && i.senha == this.login.value.senha ){
            this.autoLogin = true;
            this.authenticate.adm = i.adm;
            this.authenticate.user = i.nome;
            this.authenticate.email = i.email;
            this.presentLoading();
        }
      }
      if(!this.autoLogin)
        this.confirmAlert2();
    }    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 800,
      translucent: true,
      cssClass: 'custom-loading',
    });
    await loading.present();
    this.router.navigate(['app/home']);
   
  }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Esqueceu a senha?',
            subHeader: 'Digite o email para recuperar sua senha',
            inputs: [
            {
                placeholder: 'email@email.com',
            }],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    
                  },
                {
                  text: 'Enviar',
                  role: 'confirm',
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
          header: 'Enviado para o email as instruções de recuperação de senha.',
          buttons: ['OK'],
        });
    
        await alert.present();
      }

    async confirmAlert2() {
      const alert = await this.alertController.create({
        header: 'Usuário e/ou Senha incorreto(s)',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
}
