import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { RedInfraestructurada } from '../models/redinfraestructurada';

@Injectable({
  providedIn: 'root'
})
export class RedInfraestructuradaService {
  apiUrl = this.wasa.apiUrlGlobal + '/redinfraestructurada';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getRedInfraestructuradas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getRedInfraestructurada(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfilterestado(estado: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/${estado}`);
  }

  deleteRedInfraestructurada(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveRedInfraestructurada( RedInfraestructurada: RedInfraestructurada) {
    return this.http.post(`${this.apiUrl}/create`, RedInfraestructurada);
  }

  updateRedInfraestructurada(id: string|number, updatedRedInfraestructurada: RedInfraestructurada): Observable<RedInfraestructurada> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedRedInfraestructurada);
  }
}
