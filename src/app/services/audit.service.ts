import { Observable } from 'rxjs';
import { Audit } from '../models/audit';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  apiUrl = this.wasa.apiUrlGlobal + '/auditoria';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getAuditorias() {
    return this.http.get(`${this.apiUrl}`);
  }

  getAuditoriaFilter(intervalo: string | number, turno: string | number) {
    return this.http.get(`${this.apiUrl}/interval/${intervalo}/${turno}`);
  }

  getAuditoria(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteAuditoria(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveAuditoria( Auditoria: Audit) {
    return this.http.post(`${this.apiUrl}/create`, Auditoria);
  }

  updateAuditoria(id: string|number, updatedAuditoria: Audit): Observable<Audit> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedAuditoria);
  }
}
