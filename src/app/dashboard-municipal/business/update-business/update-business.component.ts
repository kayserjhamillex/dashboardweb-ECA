import { ToastrService } from 'ngx-toastr';
import { Empresa } from 'src/app/models/empresa';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-update-business',
  templateUrl: './update-business.component.html',
  styleUrls: ['./update-business.component.css']
})
export class UpdateBusinessComponent implements OnInit {
  empresa: Empresa = {
    id: 0,
    NombreComercial: '',
    RazonSocial: '',
    RUC: '',
    Detalles: ''
  };
  elempresa: any;
  tipos: any = [];
  eltipo: any;
  cambio = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    // private tipoempService: TipoempService,
    private activatedRoute: ActivatedRoute,
    private empresaService: EmpresaService,
  ) { }
  atras() {
    this.router.navigate(
      [
        'dashboard-admin',
        'empresa',
        'lista'
      ]
    );
  }
  // getTipoes() {
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
  // elcambio() {
  //   this.cambio = !this.cambio;
  //   console.log(this.cambio);
  // }
  // onOptionsSelectedTipo(event: any) {
  //   const value = event.target.value;
  //   this.empresa.TipoId = value;
  //   this.elcambio();
  //   const array: any = this.tipos;
  //   for (const obj of array) {
  //     if (this.empresa.TipoId == obj.id) {
  //       this.eltipo = obj.Name;
  //     }
  //   }
  // }
  ngOnInit(): void {
    // this.getTipos();
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.empresaService.getEmpresa(params['id']).subscribe(
        (res:any) => {
          console.log(res);
          this.empresa = res;
          this.eltipo = res.Tipo.Name;
          console.log(this.eltipo);
        },
        (err: any) => console.log(err)
      );
    }
  }
  updateempresa() {
    const params = this.activatedRoute.snapshot.params;
    this.empresaService.updateEmpresa(params['id'], this.empresa).subscribe(
        (res: any) => {
          console.log(res);
          this.router.navigate(
            [
              'dashboard-admin',
              'empresa',
              'lista'
            ]
          );
          this.toastr.success('actualizando los datos del empresa');
        },
        (err: any) => {
          console.error(err);
          this.toastr.error('no se pudo actualizar');
        }
      );
  }
}
