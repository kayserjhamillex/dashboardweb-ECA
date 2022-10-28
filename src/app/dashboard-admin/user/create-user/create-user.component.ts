import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { RolService } from 'src/app/services/rol.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @ViewChild('file1') fileimagen: any;
  laurlimagen: string | undefined;
  datosimagen: any = [];
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
  eluser: any;
  roles: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private rolService: RolService,
    private usuarioService: UserService,
    private photoService: ProfileUploadService,
  ) { }
  atras() {
    this.router.navigate(
      [
        'dashboard-admin',
        'usuario',
        'lista'
      ]
    );
  }
  getroles() {
    this.rolService.getRols().subscribe(
      (res: any) => {
        this.roles = res;
        console.log(res);
      },
      (err: any) => {
        this.toastr.error('Error en la Api');
      }
    );
  }
  onOptionsSelectedRol(event: any) {
    const value = event.target.value;
    this.usuario.RolId = value;
    console.log(value);
  }
  // tslint:disable-next-line: typedef
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
  // creando metodo para crear un nuevo admin
  // tslint:disable-next-line: typedef
  saveAdmin() {
    this.usuario.Contrasena = this.usuario.Documento;
    delete this.usuario.id;
    console.log(this.usuario);
    // this.admin.Password = this.admin.Phone;
    // llamando a servicio de creacion que esta enlazada con el api
    this.usuarioService.saveUsuario(this.usuario).subscribe(
      (res: any) => {
        console.log(res);
        this.eluser = res;
        this.router.navigate(
          [
            'dashboard-admin',
            'usuario',
            'lista'
          ]
        );
        this.toastr.success('Nuevo usuario creado');
      },
      (err: any) => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo usuario');
      }
    );
  }
  ngOnInit(): void {
    this.getroles();
    // this.usuario = JSON.parse(localStorage.getItem('admin'));
  }

}
