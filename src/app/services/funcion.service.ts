import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Funcion } from '../models/funcion';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionService {
  apiUrl = this.wasa.apiUrlGlobal + '/funcion';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getFuncions() {
    return this.http.get(`${this.apiUrl}`);
  }

  getFuncion(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteFuncion(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveFuncion( Funcion: Funcion) {
    return this.http.post(`${this.apiUrl}/create`, Funcion);
  }

  updateFuncion(id: string|number, updatedFuncion: Funcion): Observable<Funcion> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedFuncion);
  }
}
