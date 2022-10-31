import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @ViewChild('file1') fileimagen: any;
  laurlimagen: string | undefined;
  datosimagen: any = [];
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
  elusuarioid: any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private usuarioService: UserService,
    private photoService: ProfileUploadService,
  ) { }
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
  ngOnInit(): void {
    if (this.usuarioService.isLoggedIn()) {
      this.client = localStorage.getItem('admin');
      this.usuario = JSON.parse(this.client);
      console.log(this.usuario);
    }
    // else {
    //   this.router.navigate(
    //     [
    //       'auth',
    //       'login'
    //     ]
    //   );
    // }
  }
  updateUsuario() {
    this.usuarioService.updateUsuario(this.elusuarioid, this.usuario).subscribe(
        (res: any) => {
          console.log(res);
          this.router.navigate(
            [
              'dashboard-admin',
              'usuario',
              'lista'
            ]
          );
          this.toastr.success('actualizando los datos del usuario');
        },
        (err: any) => {
          console.error(err);
          this.toastr.error('no se pudo actualizar');
        }
      );
  }
}
