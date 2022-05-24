import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Devocional } from '../modal/devocional.modal';
import { ToastController } from '@ionic/angular';

@Injectable({ providedIn: 'root'})
export class DevocionaisService {
  baseUrl: String = environment.baseUrl;
  devocionais: [];

  reload = true;

  constructor(private http: HttpClient, public toastController: ToastController) { }

  findAll(): Observable<Devocional[]> {
    const url = `${this.baseUrl}/devocional`;
    return this.http.get<Devocional[]>(url);
  }

  findID(id: Number): Observable<Devocional[]> {
    const url = `${this.baseUrl}/devocional/${id}`;
    return this.http.get<Devocional[]>(url);
  }
  
  create(devocional): Observable<any> {
    const url = `${this.baseUrl}devocional`;
    return this.http.post(url, devocional);
  }

  delete(id: string): Observable<Devocional[]> {
    const url = `${this.baseUrl}/devocional/${id}`;
    return this.http.delete<Devocional[]>(url);
  }
  
  update(devocional: Devocional):Observable<void> {
    const url = `${this.baseUrl}/devocional/${devocional.id}`
    return this.http.put<void>(url, devocional)
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