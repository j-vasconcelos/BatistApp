import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateEventoPage } from 'src/app/pages/create-evento/create-evento.page';

@Component({
  selector: 'app-form-presencial',
  templateUrl: './form-presencial.component.html',
  styleUrls: ['./form-presencial.component.scss'],
})
export class FormPresencialComponent implements OnInit {

  constructor(private router: Router, private createEvento: CreateEventoPage) { }

  ngOnInit() {}

  cancel(): void{
    this.createEvento.formPresencial();
  }

}
