import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { Infraestructura } from '../models/infraestructura';

@Injectable({
  providedIn: 'root'
})
export class InfraestructuraService {
  apiUrl = this.wasa.apiUrlGlobal + '/infraestructura';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getInfraestructuras() {
    return this.http.get(`${this.apiUrl}`);
  }

  getInfraestructura(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfilterfuncion(funcion: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/${funcion}`);
  }

  deleteInfraestructura(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveInfraestructura( Infraestructura: Infraestructura) {
    return this.http.post(`${this.apiUrl}/create`, Infraestructura);
  }

  updateInfraestructura(id: string|number, updatedInfraestructura: Infraestructura): Observable<Infraestructura> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedInfraestructura);
  }
}
