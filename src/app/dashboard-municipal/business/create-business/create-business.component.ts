import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empresa } from 'src/app/models/empresa';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.css']
})
export class CreateBusinessComponent implements OnInit {
  empresa: Empresa = {
    id: 0,
    NombreComercial: '',
    RazonSocial: '',
    RUC: '',
    Detalles: ''
  };
  elempresa: any;
  tipos: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private empresaService: EmpresaService,
  ) { }
  atras() {
    this.router.navigate(
      [
        'dashboard-moderador',
        'empresa',
        'lista'
      ]
    );
  }
  // gettipos() {
  //   this.tipoempService.getTipos().subscribe(
  //     (res: any) => {
  //       this.tipos = res;
  //       console.log(res);
  //     },
  //     (err: any) => {
  //       this.toastr.error('Error en la Api');
  //     }
  //   );
  // }
  // onOptionsSelectedTipo(event: any) {
  //   const value = event.target.value;
  //   this.empresa.TipoId = value;
  //   console.log(value);
  // }
  saveempresa() {
    delete this.empresa.id;
    console.log(this.empresa);
    // this.admin.Password = this.admin.Phone;
    // llamando a servicio de creacion que esta enlazada con el api
    this.empresaService.saveEmpresa(this.empresa).subscribe(
      (res: any) => {
        console.log(res);
        this.elempresa = res;
        this.router.navigate(
          [
            'dashboard-moderador',
            'empresa',
            'lista'
          ]
        );
        this.toastr.success('Nueva empresa creado');
      },
      (err: any) => {
        console.error(err);
        this.toastr.error('no se pudo crear un nueva empresa');
      }
    );
  }
  ngOnInit(): void {
    // this.gettipos();
    // this.usuario = JSON.parse(localStorage.getItem('admin'));
  }

}
