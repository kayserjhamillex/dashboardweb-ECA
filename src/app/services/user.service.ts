import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  client = new BehaviorSubject<any>(null);
  client$ = this.client.asObservable();
  apiUrl = this.globallink.apiUrlGlobal + '/usuario';
  apiUrldominio = this.globallink.apiUrlGlobal + '/live';
  constructor(
    private http: HttpClient,
    private globallink: GlobalService
  ) { }

  loggin(client: object) {
    const cli = JSON.stringify(client);
    this.client.next(client);
    localStorage.setItem('usuario', cli);
  }
  loggout() {
    this.client.next(null);
    localStorage.removeItem('usuario');
  }
  isLoggedIn(): boolean {
    if (localStorage.getItem('usuario')) {
      console.log('hay usuario');
      return true;
    } else {
      console.log('¿no hay usuario');
      return false;
    }
  }

  getUsuarios() {
    return this.http.get(`${this.apiUrl}`);
  }

  getUsuario(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteUsuario(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  saveUsuario(Usuario: User) {
    return this.http.post(`${this.apiUrl}/create`, Usuario);
  }

  updateUsuario(id: string|number, updateduser: User): Observable<User> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updateduser);
  }
  getFilterRol(rol: string | number) {
    return this.http.get(`${this.apiUrl}/filter/${rol}`);
  }
  getSearch(correo: string) {
    return this.http.get(`${this.apiUrl}/search/${correo}`);
  }
  getSearchDoc(documento: string) {
    return this.http.get(`${this.apiUrl}/searchdoc/${documento}`);
  }
  getSearchCel(celular: string) {
    return this.http.get(`${this.apiUrl}/searchcel/${celular}`);
  }
  getlogin(correo: string, contra: string) {
    return this.http.get(`${this.apiUrl}/login/${correo}/${contra}`);
  }
  getrecover(id: string | number) {
    return this.http.get(`${this.apiUrldominio}/recover/${id}`);
  }
  getcofirecover(codigo: string, id: string | number) {
    return this.http.get(`${this.apiUrl}/recover/${codigo}/${id}`);
  }
}
