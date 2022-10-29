import { Observable } from 'rxjs';
import { Zona } from '../models/zona';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZonaService {
  apiUrl = this.wasa.apiUrlGlobal + '/zona';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getZonas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getZonaFilter(intervalo: string | number, turno: string | number) {
    return this.http.get(`${this.apiUrl}/interval/${intervalo}/${turno}`);
  }

  getZona(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteZona(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveZona( zona: Zona) {
    return this.http.post(`${this.apiUrl}/create`, zona);
  }

  updateZona(id: string|number, updatedZona: Zona): Observable<Zona> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedZona);
  }
}
