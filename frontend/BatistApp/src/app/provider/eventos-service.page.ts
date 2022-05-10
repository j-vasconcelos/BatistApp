import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class EventosService {
  eventos: [];

  constructor() { }

  getEventos() {
    return new Promise((resolve: ({ }) => void, reject) => {
      fetch('./../assets/data/data.json').then(res => res.json())
        .then((data) => {
          this.eventos = data.eventos;
          resolve(this.eventos);
        }, err => {
          console.log(err);
          reject();
        });
    });
  }

  getEvento(id: string) {
    return new Promise((resolve: ({ }) => void, reject) => {
      this.eventos.filter((row: any, index: number) => {
        if (row.id === id) {
          resolve(row);
        }
        if (this.eventos.length === index + 1) {
          reject();
        }
      });
    });
  }

}