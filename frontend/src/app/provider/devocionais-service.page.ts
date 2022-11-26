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

  constructor(private http: HttpClient, public toastController: ToastController) { }

  findAll(): Observable<Devocional[]> {
    const url = `${this.baseUrl}/api/v1/devocional`;
    return this.http.get<Devocional[]>(url);
  }

  findById(id: Number): Observable<Devocional> {
    const url = `${this.baseUrl}/api/v1/devocional/${id}`
    return this.http.get<Devocional>(url)
  }

  create(devocional: Devocional): Observable<Devocional>{
    const url = `${this.baseUrl}/api/v1/devocional`
    return this.http.post<Devocional>(url, devocional);
  }

  delete(id: Number):Observable<void> {
    const url = `${this.baseUrl}/api/v1/devocional/${id}`
    return this.http.delete<void>(url)
  }

  update(devocional: Devocional):Observable<void> {
    const url = `${this.baseUrl}/api/v1/devocional/${devocional.id}`
    return this.http.put<void>(url, devocional)
  }

  uploadImage(fileUrl: File):Observable<any>{
    const url = `${this.baseUrl}/api/v1/devocional/image`
    const formData = new FormData(); 
    formData.append("file", fileUrl);
    return this.http.post(url, fileUrl);
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