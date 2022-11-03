import { Observable } from 'rxjs';
import { Red } from '../models/red';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  apiUrl = this.wasa.apiUrlGlobal + '/red';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getReds() {
    return this.http.get(`${this.apiUrl}`);
  }

  getRed(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfilterfuncion(funcion: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/${funcion}`);
  }

  deleteRed(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveRed( Red: Red) {
    return this.http.post(`${this.apiUrl}/create`, Red);
  }

  updateRed(id: string|number, updatedRed: Red): Observable<Red> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedRed);
  }
}
