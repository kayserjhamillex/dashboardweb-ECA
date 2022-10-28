import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  parametro = {
    usuario: '',
    contra: ''
  };
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
    private userService: UserService
  ) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  login() {
    console.log(this.parametro);
    const parametro1 = this.parametro.usuario;
    const parametro2 = this.parametro.contra;
    console.log(parametro1);
    console.log(parametro2);
    this.userService.getlogin(parametro1, parametro2).subscribe(
      (res: any) => {
        if (res) {
          this.userService.loggin(res);
          this.toastr.success('Bienvenido Usuario');
        } else {
          this.toastr.error('Usuario y Contraseña incorrecto');
        }
      }, (err: any) => {
        console.log(err);
      }
    );
  }
  // tslint:disable-next-line: typedef
  recover() {
    this.toastr.info(
      'Confirmar correo para recuperar Contraseña'
    );
    this.router.navigate(
      [
        'auth',
        'recover'
      ]
    );
  }
}
