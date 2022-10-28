import { User } from '../models/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  usuario: User = {
    id: 0,
    Nombre: '',
    Apellido: '',
    Correo: '',
    Documento: '',
    Celular: '',
    Usuario: '',
    Foto: '',
    Contrasena: '',
    Estadito: '',
    Codigo: '',
    RolId: 0
  };
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      console.log('Existe un usuario logueado');
    } else {
      this.router.navigate(
        [
          'auth',
          'login'
        ]
      );
    }
    this.userService.client$.subscribe(
      (res: any) => {
        if (res) {
          this.usuario = res;
          const parametro = this.usuario.RolId;
          if (parametro === 1) {
            this.router.navigate(
              [
                'dashboard-admin',
                'home'
              ]
            );
          } else if (parametro === 2) {
            this.router.navigate(
              [
                'dashboard-aguatero',
                'home'
              ]
            );
          } else if (parametro === 3) {
            this.router.navigate(
              [
                'dashboard-espredes',
                'home'
              ]
            );
          } else if (parametro === 4) {
            this.router.navigate(
              [
                'dashboard-moderador',
                'home'
              ]
            );
          } else if (parametro === 5) {
            this.router.navigate(
              [
                'dashboard-municipal',
                'home'
              ]
            );
          } else if (parametro === 6) {
            this.router.navigate(
              [
                'dashboard-tecnico',
                'home'
              ]
            );
          }
        }
      }
    );
  }

}
