import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { Empresa } from 'src/app/models/empresa';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { UserService } from 'src/app/services/user.service';
import { ProyectoDetail } from 'src/app/models/proyectodetail';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  proyectos: any = [];
  proyectosfiltrados: any = [];
  tipos: any = [];
  mensaje: any;
  codigoelegido: any;
  eldato: any;
  datillo: any;
  botonfiltro = true;
  botonesencargado = false;
  botonesempresa = false;
  filtroporencargado = false;
  filtroporempresa = false;
  proyecto: Proyecto = {
    id: 0,
    Nombre: '',
    Descripcion: '',
    FechaInicio: '',
    FechaFin: '',
    Estado: '',
    EmpresaId: 0,
    UsuarioId: 0
  };
  proyectodetalle: ProyectoDetail = {
    id: 0,
    Nombre: '',
    Descripcion: '',
    FechaInicio: '',
    FechaFin: '',
    Estado: '',
    EmpresaId: 0,
    UsuarioId: 0,
    empresa: {
      id: 0,
    NombreComercial: '',
    RazonSocial: '',
    RUC: '',
    Detalles: ''
    },
    usuario: {
      id: 0,
    Nombre: '',
    Apellido: '',
    Correo: '',
    Documento: '',
    Celular: '',
    Usuario: '',
    Foto: '',
    RolId: 0,
    rol: {
      id: 0,
      Name: ''
    }
    }
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
  empresa: Empresa = {
    id: 0,
    NombreComercial: '',
    RazonSocial: '',
    RUC: '',
    Detalles: ''
  };
  constructor(
    private route: Router,
    private toastr: ToastrService,
    private encargadoService: UserService,
    private empresaService: EmpresaService,
    private proyectoService: ProyectoService,
    // private tipoempService: TipoempService
  ) { }
  habilitarfiltroencargado() {
    this.botonfiltro = !this.botonfiltro;
    this.botonesencargado = !this.botonesencargado;
  }
  habilitarfiltroempresa() {
    this.botonfiltro = !this.botonfiltro;
    this.botonesempresa = !this.botonesempresa;
  }
  respuestaencargado() {
    this.botonfiltro = !this.botonfiltro;
    this.botonesencargado = !this.botonesencargado;
    this.filtroporencargado = !this.filtroporencargado;
  }
  respuestaempresa() {
    this.botonfiltro = !this.botonfiltro;
    this.botonesempresa = !this.botonesempresa;
    this.filtroporempresa = !this.filtroporempresa;
  }
  volveralanormalidad() {
    this.botonfiltro = true;
    this.botonesencargado = false;
    this.botonesempresa = false;
    this.filtroporencargado = false;
    this.filtroporempresa = false;
  }
  buscarcorreo(dato: string) {
    this.encargadoService.getSearch(dato).subscribe(
      (res: any) => {
        this.usuario = res;
        const parametro: any = this.usuario.id;
        this.filtradoencargado(parametro);
      },
      (err: any) => {
        this.toastr.error('Error en la Api get seach correo');
      }
    );
  }
  buscardocumento(dato: string) {
    this.encargadoService.getSearchDoc(dato).subscribe(
      (res: any) => {
        this.usuario = res;
        const parametro: any = this.usuario.id;
        this.filtradoencargado(parametro);
      },
      (err: any) => {
        this.toastr.error('Error en la Api get seach documento');
      }
    );
  }
  buscarcelular(dato: string) {
    this.encargadoService.getSearchCel(dato).subscribe(
      (res: any) => {
        this.usuario = res;
        const parametro: any = this.usuario.id;
        this.filtradoencargado(parametro);
      },
      (err: any) => {
        this.toastr.error('Error en la Api get seach celular');
      }
    );
  }
  filtradoencargado(dato: any) {
    this.proyectoService.getfilterencargado(dato).subscribe(
      (res: any) => {
        this.proyectos = res;
        this.respuestaencargado();
      },
      (err: any) => {
        this.toastr.error('Error en la Api get filter encargado');
      }
    );
  }
  buscarruc(dato: string) {
    this.empresaService.getEmpresaRUC(dato).subscribe(
      (res: any) => {
        this.empresa = res;
        const parametro: any = this.empresa.id;
        this.proyectoService.getfilterempresa(parametro).subscribe(
          (res: any) => {
            this.proyectos = res;
            this.respuestaempresa();
          },
          (err: any) => {
            this.toastr.error('Error en la Api filter ruc');
          }
        );
      },
      (err: any) => {
        this.toastr.error('Error en la Api get seach empresa por ruc');
      }
    );
  }
  getproyectos() {
    this.proyectoService.getProyectos().subscribe(
      (res: any) => {
        this.proyectos = res;
        console.log(res);
      },
      (err: any) => {
        this.toastr.error('Error en la Api get proyectos');
      }
    );
  }
  ngOnInit(): void {
    this.getproyectos();
  }
  crear() {
    this.route.navigate(
      [
        'dashboard-municipal',
        'proyecto',
        'crear'
      ]
    );
  }
  editar(codigo: any) {
    this.route.navigate(
      [
        'dashboard-municipal',
        'proyecto',
        'modificar',
        codigo
      ]
    );
  }
}
