import { Observable } from 'rxjs';
import { Sensor } from '../models/sensor';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  apiUrl = this.wasa.apiUrlGlobal + '/sensor';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getSensors() {
    return this.http.get(`${this.apiUrl}`);
  }

  getSensor(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfiltertipo(tipo: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/${tipo}`);
  }

  deleteSensor(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveSensor( Sensor: Sensor) {
    return this.http.post(`${this.apiUrl}/create`, Sensor);
  }

  updateSensor(id: string|number, updatedSensor: Sensor): Observable<Sensor> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedSensor);
  }
}
