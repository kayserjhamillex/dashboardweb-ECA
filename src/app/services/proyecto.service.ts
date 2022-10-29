import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  apiUrl = this.wasa.apiUrlGlobal + '/proyecto';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getProyectos() {
    return this.http.get(`${this.apiUrl}`);
  }

  getProyectoFilter(intervalo: string | number, turno: string | number) {
    return this.http.get(`${this.apiUrl}/interval/${intervalo}/${turno}`);
  }

  getProyecto(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfilterempresa(empresa: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/empresa/${empresa}`);
  }

  getfilterencargado(encargado: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/encargado/${encargado}`);
  }

  getfilterestado(estado: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/estado/${estado}`);
  }

  deleteProyecto(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveProyecto( Proyecto: Proyecto) {
    return this.http.post(`${this.apiUrl}/create`, Proyecto);
  }

  updateProyecto(id: string|number, updatedProyecto: Proyecto): Observable<Proyecto> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedProyecto);
  }
}
