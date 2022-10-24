import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {
  correo = '';
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
  respuestita: any = [];
  codigo: any;
  respuesta: any = [];
  caracteres = 'Aa0BbCc1DdEe2FfGgHh3IiJj4KkLl5MmNn6OoPp7QqRr8SsTt9UuVv*WwXxYyZz$';
  laclave = '';
  long = 10;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) { }
  // tslint:disable-next-line: typedef
  getNumero(min: number, max: number) {
    return Math.floor( Math.random() * ( max - min ) ) + min;
  }
  // tslint:disable-next-line: typedef
  generaryenviar(par: any) {
    let numero;
    let clave = '';
    /*creacion de clave*/
    for ( let i = 0; i < this.long; i++)
    {
      numero = this.getNumero( 0, this.caracteres.length );
      clave += this.caracteres.substring( numero, numero + 1 );
      this.laclave = clave;
    }
    console.log(clave);
    this.usuario.Codigo = this.laclave;
    this.usuario.Estadito = 'activo';
    this.userService.updateUsuario(par, this.usuario).subscribe(
      res => {
        if (res) {
          this.respuestita = res;
          this.toastr.info('se genero el codigo');
        }
      }, err => {
        this.toastr.error('Error al generar el codigo');
      }
    );
  }
  // tslint:disable-next-line: typedef
  confirmar() {
    console.log(this.correo);
    this.userService.getSearch(this.correo).subscribe(
      res => {
        if (res) {
          this.usuario = res;
          this.codigo = this.usuario.id;
          this.generaryenviar(this.codigo);
          const parametro = this.codigo.toString();
          this.userService.getrecover(parametro).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              this.respuesta = res;
              this.toastr.success('Por favor Confirme la actualizacion en su correo');
              this.router.navigate(
                [
                  'auth',
                  'password',
                  this.codigo
                ]
              );
            },
            err => {
              this.toastr.error('No se pudo enviar el Correo');
            }
          );
        } else {
          this.toastr.error('Correo no es de la empresa');
        }
      },
      err => {
        this.toastr.error('Usted no es un trabajador de la empresa');
        console.log(err);
      }
    );
  }
  volver() {
    this.router.navigate(
      [
        'auth',
        'login'
      ]
    );
  }
  ngOnInit(): void {
  }

}
