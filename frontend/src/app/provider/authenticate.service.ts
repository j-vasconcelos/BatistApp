import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  usuarios: [];
  adm: boolean;
  user: string;
  email: string;

  constructor() { }

  getUsers() {
    return new Promise((resolve: ({ }) => void, reject) => {
      fetch('./assets/data/data.json').then(res => res.json())
        .then((data) => {
          this.usuarios = data;
          resolve(this.usuarios);
        }, err => {
          console.log(err);
          reject();
        });
    });
  }
}
