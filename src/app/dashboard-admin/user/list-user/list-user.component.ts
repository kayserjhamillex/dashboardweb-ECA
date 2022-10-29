import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/services/rol.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  usuarios: any = [];
  usuariosfiltrados: any = [];
  roles: any = [];
  listafiltrada = true;
  mensaje: any;
  codigoelegido: any;
  eldato: any;
  datillo: any;
  busquedausuario = false;
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
    private route: Router,
    private toastr: ToastrService,
    private rolService: RolService,
    private usuarioService: UserService,
  ) { }
  getroles() {
    this.rolService.getRols().subscribe(
      (res: any) => {
        this.roles = res;
      },
      (err: any) => {
        this.toastr.error('Error en la Api');
      }
    );
  }
  onOptionsSelectedRol(event: any) {
    const value = event.target.value;
    if (value !== 0 || value !== '') {
      this.usuarioService.getFilterRol(value).subscribe(
        (res: any) => {
          this.usuarios = res;
          console.log(res);
        },
        (err: any) => {
          this.toastr.error('Error en la get usuarios filtrados');
        }
      );
    } else {
      this.usuarioService.getUsuarios().subscribe(
        (res: any) => {
          this.usuarios = res;
          console.log(res);
        },
        (err: any) => {
          this.toastr.error('Error en la Api get usuarios');
        }
      );
    }
  }
  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(
      (res: any) => {
        this.usuarios = res;
        console.log(res);
      },
      (err: any) => {
        this.toastr.error('Error en la Api get usuarios');
      }
    );
  }
  buscarcorreo(dato: string) {
    this.usuarioService.getSearch(dato).subscribe(
      (res: any) => {
        this.usuario = res;
        this.busquedausuario = true;
      },
      (err: any) => {
        this.toastr.error('Error en la Api get seach correo');
      }
    );
  }
  buscardocumento(dato: string) {
    this.usuarioService.getSearchDoc(dato).subscribe(
      (res: any) => {
        this.usuario = res;
        this.busquedausuario = true;
      },
      (err: any) => {
        this.toastr.error('Error en la Api get seach documento');
      }
    );
  }
  buscarcelular(dato: string) {
    this.usuarioService.getSearchCel(dato).subscribe(
      (res: any) => {
        this.usuario = res;
        this.busquedausuario = true;
      },
      (err: any) => {
        this.toastr.error('Error en la Api get seach celular');
      }
    );
  }
  volveralista() {
    this.busquedausuario = false;
  }
  ngOnInit(): void {
    this.getroles();
    this.getUsuarios();
  }
  crear() {
    this.route.navigate(
      [
        'dashboard-admin',
        'usuario',
        'crear'
      ]
    );
  }
  editar(codigo: any) {
    this.route.navigate(
      [
        'dashboard-admin',
        'usuario',
        'modificar',
        codigo
      ]
    );
  }

}
