import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  // client: any;
  // usuario: User = {
  //   id: 0,
  //   Nombre: '',
  //   Apellido: '',
  //   Correo: '',
  //   Documento: '',
  //   Celular: '',
  //   Usuario: '',
  //   Foto: '',
  //   Contrasena: '',
  //   Estadito: '',
  //   Codigo: '',
  //   RolId: 0
  // };
  constructor(
    // private router: Router,
    // private usuarioService: UserService
  ) { }

  ngOnInit(): void {
    // if (this.usuarioService.isLoggedIn()) {
    //   this.client = localStorage.getItem('usuario');
    //   this.usuario = JSON.parse(this.client);
    //   console.log(this.usuario);
    // } else {
    //   this.router.navigate(
    //     [
    //       'auth',
    //       'login'
    //     ]
    //   );
    // }
  }

}
