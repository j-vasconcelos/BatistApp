import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Devocional } from 'src/app/modal/devocional.modal';
import { ViewDevocionalPage } from 'src/app/pages/view-devocional/view-devocional.page';
import { DevocionaisService } from 'src/app/provider/devocionais-service.page';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {

  private editar: FormGroup;

  devocional: Devocional = {
    id:0,
    devotionalTitle: '',
    textVersicle: '',
    devotionalText: '',
    prayerText: '',
    postDate: '',   
    imgURL: ''
  }

  constructor(private service: DevocionaisService,
    private route: ActivatedRoute,
    private router: Router, private viewdevocionalpage: ViewDevocionalPage) { 
      this.editar = new FormGroup({
        devotionalTitle: new FormControl('', Validators.required),
        postDate: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+/[0-9]+/[0-9]+$')])),
      });
    }

    ngOnInit(): void {
      this.devocional.id = this.route.snapshot.params['id']
      this.findById();
      console.log(this.devocional.id);
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
  
    update(): void {
      if(this.devocional.devotionalTitle != "" && this.devocional.textVersicle != "" 
      && this.devocional.devotionalText != "" && this.devocional.prayerText != ""
      && this.devocional.postDate != ""){
        this.service.update(this.devocional).subscribe((resposta) => {
          this.router.navigate(["app/devocional"]);
          
          this.viewdevocionalpage.clickEditar();
          this.service.mensagem("Devocional atualizado com sucesso");
        }, err => {
          this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
        });
      }else{
        this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
      }
      
    }

    cancel(): void {
      this.viewdevocionalpage.clickEditar();
    }

}
