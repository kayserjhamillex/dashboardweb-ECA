import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Estandar } from '../models/estandar';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstandarService {
  apiUrl = this.wasa.apiUrlGlobal + '/estandar';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getEstandars() {
    return this.http.get(`${this.apiUrl}`);
  }

  getEstandarFilter(intervalo: string | number, turno: string | number) {
    return this.http.get(`${this.apiUrl}/interval/${intervalo}/${turno}`);
  }

  getEstandar(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfiltertipo(tipo: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/${tipo}`);
  }

  deleteEstandar(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveEstandar( Estandar: Estandar) {
    return this.http.post(`${this.apiUrl}/create`, Estandar);
  }

  updateEstandar(id: string|number, updatedEstandar: Estandar): Observable<Estandar> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedEstandar);
  }
}
