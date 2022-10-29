import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Empresa } from '../models/empresa';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  apiUrl = this.wasa.apiUrlGlobal + '/empresa';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getEmpresas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getEmpresaFilter(intervalo: string | number, turno: string | number) {
    return this.http.get(`${this.apiUrl}/interval/${intervalo}/${turno}`);
  }

  getEmpresa(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteEmpresa(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveEmpresa( empresa: Empresa) {
    return this.http.post(`${this.apiUrl}/create`, empresa);
  }

  updateEmpresa(id: string|number, updatedEmpresa: Empresa): Observable<Empresa> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedEmpresa);
  }
}
