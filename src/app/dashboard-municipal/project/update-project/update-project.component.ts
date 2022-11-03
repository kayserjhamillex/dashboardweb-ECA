import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { Empresa } from 'src/app/models/empresa';
import { Proyecto } from 'src/app/models/proyecto';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProyectoDetail } from 'src/app/models/proyectodetail';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  @ViewChild('file1') fileimagen: any;
  laurlimagen: string | undefined;
  datosimagen: any = [];
  inicio: Date = new Date();
  fin: Date = new Date();
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
  elproyecto: any;
  tipos: any = [];
  cambiarusuario = false;
  cambiarempresa = false;
  elruc: any;
  eldato: any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private usuarioService: UserService,
    private empresaService: EmpresaService,
    private proyectoService: ProyectoService,
    private photoService: ProfileUploadService,
  ) { }
  cambiouser() {
    this.cambiarusuario = !this.cambiarusuario;
  }
  cambioempresa() {
    this.cambiarempresa = !this.cambiarempresa;
  }
  changeImg() {
    this.fileimagen.nativeElement.click();
  }
  // tslint:disable-next-line: typedef
  changeImagen() {
    // this.showAvatarUpload = true;
    const files: { [key: string]: File } = this.fileimagen.nativeElement.files;
    console.log(files);
    // let progress = this.uploadService.upload(images);
    this.photoService.uploadfoto(files[0], 'foto').subscribe(
      (resimage: any) => {
        console.log(resimage);
        this.datosimagen = resimage;
        this.laurlimagen = this.datosimagen.data.url;
        console.log(this.laurlimagen);
        this.usuario.Foto = this.laurlimagen;
      },
      console.error,
    );
  }
  atras() {
    this.router.navigate(
      [
        'dashboard-municipal',
        'proyecto',
        'lista'
      ]
    );
  }
  saveAdmin() {
    this.usuario.Contrasena = this.usuario.Documento;
    delete this.usuario.id;
    console.log(this.usuario);
    this.usuarioService.saveUsuario(this.usuario).subscribe(
      (res: any) => {
        this.usuario = res;
        this.toastr.success('Nuevo usuario creado');
        this.cambiarusuario = false;
      },
      (err: any) => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo usuario');
      }
    );
  }
  buscarcorreo(dato: string) {
    this.usuarioService.getSearch(dato).subscribe(
      (res: any) => {
        this.usuario = res;
        this.cambiarusuario = false;
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
        this.cambiarusuario = false;
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
        this.cambiarusuario = false;
      },
      (err: any) => {
        this.toastr.error('Error en la Api get seach celular');
      }
    );
  }
  saveempresa() {
    delete this.empresa.id;
    console.log(this.empresa);
    // this.admin.Password = this.admin.Phone;
    // llamando a servicio de creacion que esta enlazada con el api
    this.empresaService.saveEmpresa(this.empresa).subscribe(
      (res: any) => {
        console.log(res);
        this.empresa = res;
        this.cambiarempresa = false;
        this.toastr.success('Nueva empresa creado');
      },
      (err: any) => {
        console.error(err);
        this.toastr.error('no se pudo crear un nueva empresa');
      }
    );
  }
  searchruc(dato: any) {
    this.empresaService.getEmpresaRUC(dato).subscribe(
      (res: any) => {
        this.empresa = res;
        this.cambiarempresa = false;
      },
      (err: any) => {
        this.toastr.error('Error en la Api get empresa por RUC');
      }
    );
  }
  saveproyecto() {
    delete this.proyecto.id;
    console.log(this.proyecto);
    // this.admin.Password = this.admin.Phone;
    // llamando a servicio de creacion que esta enlazada con el api
    this.proyectoService.saveProyecto(this.proyecto).subscribe(
      (res: any) => {
        console.log(res);
        this.elproyecto = res;
        this.router.navigate(
          [
            'dashboard-municipal',
            'proyecto',
            'lista'
          ]
        );
        this.toastr.success('Nueva proyecto creado');
      },
      (err: any) => {
        console.error(err);
        this.toastr.error('no se pudo crear un nueva proyecto');
      }
    );
  }
  ngOnInit(): void {
  }
}
