import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  parametro = {
    contra1: '',
    contra2: ''
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
  usuario1: User = {
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
  usuario2: User = {
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
  dato = '';
  respuesta: any = [];
  bandera = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.userService.getUsuario(params['id']).subscribe(
        (res: any) => {
          console.log(res);
          this.usuario = res;
        },
        (err: any) => console.log(err)
      );
    }
  }
  // tslint:disable-next-line: typedef
  comprobarcodigo(par: any) {
    const codigo: any = this.usuario.id;
    this.userService.getcofirecover(par.tostring(), codigo).subscribe(
      (res: any) => {
        if (res !== null) {
          this.usuario1 = res;
          this.toastr.info('Proceda a cambiar su contra');
          this.bandera = true;
        } else {
          this.toastr.error('Codigo no encontrado');
          this.bandera = false;
        }
      },
      (err: any) => {
        this.toastr.error('Codigo desactivado');
      }
    );
  }
  // tslint:disable-next-line: typedef
  actualizar() {
    const params = this.activatedRoute.snapshot.params;
    const codigo = params['id'];
    this.usuario1.Contrasena = this.parametro.contra1;
    if (this.parametro.contra1 !== '' && this.parametro.contra2 !== '') {
      if (this.parametro.contra1 === this.parametro.contra2) {
        console.log(this.usuario1);
        this.userService.updateUsuario(codigo, this.usuario1).subscribe(
          (res: any) => {
            this.respuesta = res;
            this.toastr.success('Contraseña actualizada');
            this.router.navigate(
              [
                'auth',
                'login'
              ]
            );
          },
          (err: any) => {
            this.toastr.error('no se pudo actualizar');
          }
        );
      } else {
        this.toastr.error('la repeticion de la contraseña es diferente');
      }
    } else {
      this.toastr.error('Por favor rellenar los campos iguales');
    }
  }
  volver() {
    this.router.navigate(
      [
        'auth',
        'login'
      ]
    );
  }
}
