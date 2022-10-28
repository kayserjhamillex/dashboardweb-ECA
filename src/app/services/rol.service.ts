import { Observable } from 'rxjs';
import { Rol } from '../models/rol';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  apiUrl = this.wasa.apiUrlGlobal + '/rol';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getRols() {
    return this.http.get(`${this.apiUrl}`);
  }

  getRolFilter(intervalo: string | number, turno: string | number) {
    return this.http.get(`${this.apiUrl}/interval/${intervalo}/${turno}`);
  }

  getRol(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteRol(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveRol( rol: Rol) {
    return this.http.post(`${this.apiUrl}/create`, rol);
  }

  updateRol(id: string|number, updatedrol: Rol): Observable<Rol> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedrol);
  }
}