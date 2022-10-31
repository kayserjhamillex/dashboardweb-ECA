import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
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
    private usuarioService: UserService,
  ) { }

  ngOnInit(): void {
    if (this.usuarioService.isLoggedIn()) {
      this.client = localStorage.getItem('admin');
      this.usuario = JSON.parse(this.client);
      console.log(this.usuario);
    }
  }

}
