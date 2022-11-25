import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Devocional } from 'src/app/modal/devocional.modal';
import { DevocionaisService } from 'src/app/provider/devocionais-service.page';

@Component({
  selector: 'app-create-devocional',
  templateUrl: './create-devocional.page.html',
  styleUrls: ['./create-devocional.page.scss'],
})
export class CreateDevocionalPage implements OnInit {

  devocional: Devocional = {
    devotionalTitle: '',
    textVersicle: '',
    devotionalText: '',
    prayerText: '',
    postDate: '', 
    imgURL: 'https://bd-api.s3.sa-east-1.amazonaws.com/1666583398809.jpg',
  }

  focused: boolean;

  onBlur(event: any) {
    const value = true;

    if (!value) {
      this.focused = false;
    }
  }


  constructor(private service: DevocionaisService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.devocional).subscribe((resposta) => {
      this.router.navigate(['/app/devocional'])
      this.service.mensagem('Devocional criado com sucesso!');
    },  err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['/app/devocional'])
  }
}
