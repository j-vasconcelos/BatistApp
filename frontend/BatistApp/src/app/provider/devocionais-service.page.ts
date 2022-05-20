import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Devocional } from '../modal/devocional.modal';

@Injectable({ providedIn: 'root'})
export class DevocionaisService {
  baseUrl: String = environment.baseUrl;
  devocionais: [];

  constructor(private http: HttpClient) { }

  findAll(): Observable<Devocional[]> {
    const url = `${this.baseUrl}/devocional`;
    return this.http.get<Devocional[]>(url);
  }

  findID(id: string): Observable<Devocional[]> {
    const url = `${this.baseUrl}/devocional/${id}`;
    return this.http.get<Devocional[]>(url);
  }
  
  create(data): Observable<any> {
    const url = `${this.baseUrl}devocional`;
    return this.http.post(url, data);
  }

  delete(id: string): Observable<Devocional[]> {
    const url = `${this.baseUrl}/devocional/${id}`;
    return this.http.delete<Devocional[]>(url);
  }

}