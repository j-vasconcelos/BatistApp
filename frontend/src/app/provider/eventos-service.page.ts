import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Eventos } from '../modal/evento.modal';

@Injectable({ providedIn: 'root'})
export class EventosService {
  baseUrl: String = environment.baseUrl;
  eventos: [];

  constructor(private http: HttpClient, public toastController: ToastController) { }

  findAll(): Observable<Eventos[]> {
    const url = `${this.baseUrl}/api/v1/eventos`;
    return this.http.get<Eventos[]>(url);
  }

  findById(id: Number): Observable<Eventos> {
    const url = `${this.baseUrl}/api/v1/eventos/${id}`
    return this.http.get<Eventos>(url)
  }

  createEvent(evento): Observable<any>{
    const url = `${this.baseUrl}/api/v1/eventos`
    return this.http.post<Eventos>(url, evento);
  }

  delete(id: Number):Observable<void> {
    const url = `${this.baseUrl}/eventos/${id}`
    return this.http.delete<void>(url)
  }

  uploadImage(fileUrl){
    const url = `${this.baseUrl}/api/v1/eventos/image`
    return this.http.post<Eventos>(url, fileUrl);
  }

  async mensagem(str: String) {
    const toast = await this.toastController.create({
      message: `${str}`,
      position: 'top',
      duration: 4000,
      buttons: [
      {
        text: 'X',
        role: 'exit',
        handler: () => {
        }
      }]
    }); 
    toast.present();
  }
}