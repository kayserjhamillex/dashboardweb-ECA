import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SensorPDC } from '../models/sensorPDC';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorPDCService {
  apiUrl = this.wasa.apiUrlGlobal + '/sensorpdc';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getSensorPDCs() {
    return this.http.get(`${this.apiUrl}`);
  }

  getSensorPDC(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfilterestado(estado: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/${estado}`);
  }

  deleteSensorPDC(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveSensorPDC( SensorPDC: SensorPDC) {
    return this.http.post(`${this.apiUrl}/create`, SensorPDC);
  }

  updateSensorPDC(id: string|number, updatedSensorPDC: SensorPDC): Observable<SensorPDC> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedSensorPDC);
  }
}
