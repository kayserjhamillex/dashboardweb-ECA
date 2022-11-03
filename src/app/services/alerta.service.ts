import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { Alerta } from '../models/alerta';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  apiUrl = this.wasa.apiUrlGlobal + '/alerta';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getAlertas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getAlerta(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfilterestado(estado: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/${estado}`);
  }

  deleteAlerta(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveAlerta( Alerta: Alerta) {
    return this.http.post(`${this.apiUrl}/create`, Alerta);
  }

  updateAlerta(id: string|number, updatedAlerta: Alerta): Observable<Alerta> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedAlerta);
  }
}
