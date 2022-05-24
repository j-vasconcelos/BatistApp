import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DevocionaisService } from 'src/app/provider/devocionais-service.page';
import { DevocionalPage } from 'src/app/views/devocional/devocional.page';

@Component({
  selector: 'app-editar-devocional',
  templateUrl: './editar-devocional.component.html',
  styleUrls: ['./editar-devocional.component.scss'],
})
export class EditarDevocionalComponent implements OnInit {

  devocional;
  
  constructor(private route: ActivatedRoute, private router: Router,
    private devocionalService: DevocionaisService, public alertController: AlertController, private devocionalPage: DevocionalPage) { }

  id = this.devocionalPage.id;
  
  ngOnInit() {
    const devocionalId = this.route.snapshot.paramMap.get('id');
    if (devocionalId) {
      this.devocionalService.findID(parseInt(devocionalId)).subscribe((devocional) => {
        this.devocional = devocional;
      });
    }
  }

  update(): void {
    this.devocionalService.update(this.devocional).subscribe((resposta) => {
      this.router.navigate(["app/devocionais/"]);
      this.devocionalPage.clickEdiar();
      this.devocionalService.mensagem("Devocional atualizado com sucesso");
    }, err => {
      this.devocionalService.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.devocionalPage.clickEdiar();
  }
}
