import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PuntodeControlIndustrial } from '../models/puntodecontrolindustrial';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class checkpointindustrialService {
  apiUrl = this.wasa.apiUrlGlobal + '/checkpointindustrial';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getcheckpointindustrials() {
    return this.http.get(`${this.apiUrl}`);
  }

  getcheckpointindustrial(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfiltercercania(cercania: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/${cercania}`);
  }

  deletecheckpointindustrial(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  savecheckpointindustrial( checkpointindustrial: PuntodeControlIndustrial) {
    return this.http.post(`${this.apiUrl}/create`, checkpointindustrial);
  }

  updatecheckpointindustrial(id: string|number, updatedcheckpointindustrial: PuntodeControlIndustrial): Observable<PuntodeControlIndustrial> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedcheckpointindustrial);
  }
}
