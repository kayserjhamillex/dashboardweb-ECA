import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { AlertaAgua } from '../models/alertaagua';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertaAguaService {
  apiUrl = this.wasa.apiUrlGlobal + '/alertaagua';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getAlertaAguas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getAlertaAgua(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfilterestado(estado: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/${estado}`);
  }

  deleteAlertaAgua(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveAlertaAgua( AlertaAgua: AlertaAgua) {
    return this.http.post(`${this.apiUrl}/create`, AlertaAgua);
  }

  updateAlertaAgua(id: string|number, updatedAlertaAgua: AlertaAgua): Observable<AlertaAgua> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedAlertaAgua);
  }
}
