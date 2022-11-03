import { User } from '../models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard-tecnico',
  templateUrl: './dashboard-tecnico.component.html',
  styleUrls: ['./dashboard-tecnico.component.css']
})
export class DashboardTecnicoComponent implements OnInit {
  client: any;
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
    private toastr: ToastrService,
    private usuarioService: UserService
  ) { }

  ngOnInit(): void {
    if (this.usuarioService.isLoggedIn()) {
      this.client = localStorage.getItem('usuario');
      this.usuario = JSON.parse(this.client);
      console.log(this.usuario);
      const parametro = this.usuario.RolId;
      if (parametro !== 6) {
        this.toastr.warning('Usted no es tecnico');
        this.router.navigate(
          [
            'auth'
          ]
        );
      }
    } else {
      this.router.navigate(
        [
          'auth'
        ]
      );
    }
  }

}
