import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actuador } from '../models/actuador';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActuadorService {
  apiUrl = this.wasa.apiUrlGlobal + '/actuador';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getActuadors() {
    return this.http.get(`${this.apiUrl}`);
  }

  getActuadorFilter(intervalo: string | number, turno: string | number) {
    return this.http.get(`${this.apiUrl}/interval/${intervalo}/${turno}`);
  }

  getActuador(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfilterzona(zona: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/zona/${zona}`);
  }

  getfilterestado(estado: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/estado/${estado}`);
  }

  deleteActuador(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveActuador( Actuador: Actuador) {
    return this.http.post(`${this.apiUrl}/create`, Actuador);
  }

  updateActuador(id: string|number, updatedActuador: Actuador): Observable<Actuador> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedActuador);
  }
}
