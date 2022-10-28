import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RolService } from 'src/app/services/rol.service';
import { UserService } from 'src/app/services/user.service';
import { ProfileUploadService } from 'src/app/services/imagepriv.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
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
  elrol: any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private rolService: RolService,
    private usuarioService: UserService,
    private activatedRoute: ActivatedRoute,
    private photoService: ProfileUploadService,
  ) { }
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
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.usuarioService.getUsuario(params['id']).subscribe(
        (res:any) => {
          console.log(res);
          this.usuario = res;
          this.rolService.getRol(res.usuario.RolId.toString()).subscribe(
            (res: any) => {
              console.log(res);
              this.elrol = res;
            },
            (err: any) => {
              console.error(err);
              this.toastr.error('Error api get rol');
            }
          );
        },
        (err: any) => console.log(err)
      );
    }
  }
  updateUsuario() {
    const params = this.activatedRoute.snapshot.params;
    this.usuarioService.updateUsuario(params['id'], this.usuario).subscribe(
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
