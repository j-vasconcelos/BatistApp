import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Eventos } from '../modal/evento.modal';

@Injectable({ providedIn: 'root'})
export class EventosService {
  baseUrl: String = environment.baseUrl;
  eventos: [];

  constructor(private http: HttpClient) { }

  findAll(): Observable<Eventos[]> {
    const url = `${this.baseUrl}/eventos`;
    return this.http.get<Eventos[]>(url);
  }

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