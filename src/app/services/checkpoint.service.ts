import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { Checkpoint } from '../models/checkpoint';

@Injectable({
  providedIn: 'root'
})
export class CheckpointService {
  apiUrl = this.wasa.apiUrlGlobal + '/checkpoint';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getCheckpoints() {
    return this.http.get(`${this.apiUrl}`);
  }

  getCheckpoint(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getfilterestado(estado: string | number) {
    return this.http.get(`${this.apiUrl}/filtrado/${estado}`);
  }

  deleteCheckpoint(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveCheckpoint( Checkpoint: Checkpoint) {
    return this.http.post(`${this.apiUrl}/create`, Checkpoint);
  }

  updateCheckpoint(id: string|number, updatedCheckpoint: Checkpoint): Observable<Checkpoint> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedCheckpoint);
  }
}
