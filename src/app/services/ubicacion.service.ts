import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ubicacion } from '../models/ubicacion';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  apiUrl = this.wasa.apiUrlGlobal + '/ubicacion';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getUbicacions() {
    return this.http.get(`${this.apiUrl}`);
  }

  getUbicacionFilter(intervalo: string | number, turno: string | number) {
    return this.http.get(`${this.apiUrl}/interval/${intervalo}/${turno}`);
  }

  getUbicacion(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfilterzona(zona: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/${zona}`);
  }

  deleteUbicacion(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveUbicacion( Ubicacion: Ubicacion) {
    return this.http.post(`${this.apiUrl}/create`, Ubicacion);
  }

  updateUbicacion(id: string|number, updatedUbicacion: Ubicacion): Observable<Ubicacion> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedUbicacion);
  }
}
