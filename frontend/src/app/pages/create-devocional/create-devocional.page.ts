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

  file: File = null;
  
  onChange(event) {
    this.file = event.target.files[0];
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

  teste() {
    console.log(this.file)
    this.service.uploadImage(this.file).subscribe((resposta) => {
      console.log("foi")
    },  err => {
      console.log("Erro ao subir a img")
    });
  }
}
