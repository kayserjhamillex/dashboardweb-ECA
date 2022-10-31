import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empresa } from 'src/app/models/empresa';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.css']
})
export class ListBusinessComponent implements OnInit {
  empresas: any = [];
  empresasfiltrados: any = [];
  tipos: any = [];
  listafiltrada = true;
  mensaje: any;
  codigoelegido: any;
  eldato: any;
  datillo: any;
  busquedaempresa = false;
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
    private empresaService: EmpresaService,
    // private tipoempService: TipoempService
  ) { }
  // gettipos() {
  //   this.tipoempService.getTipos().subscribe(
  //     (res: any) => {
  //       this.tipos = res;
  //     },
  //     (err: any) => {
  //       this.toastr.error('Error en la Api');
  //     }
  //   );
  // }
  // onOptionsSelectedRol(event: any) {
  //   const value = event.target.value;
  //   if (value !== 0 || value !== '') {
  //     this.empresaService.getfiltertipo(value).subscribe(
  //       (res: any) => {
  //         this.empresas = res;
  //         console.log(res);
  //       },
  //       (err: any) => {
  //         this.toastr.error('Error en la get estandars filtrados');
  //       }
  //     );
  //   } else {
  //     this.empresaService.getEmpresas().subscribe(
  //       (res: any) => {
  //         this.empresas = res;
  //         console.log(res);
  //       },
  //       (err: any) => {
  //         this.toastr.error('Error en la Api get estandars');
  //       }
  //     );
  //   }
  // }
  searchruc(dato: any) {
    this.empresaService.getEmpresaRUC(dato).subscribe(
      (res: any) => {
        this.empresa = res;
        this.busquedaempresa = true;
      },
      (err: any) => {
        this.toastr.error('Error en la Api get empresa por RUC');
      }
    );
  }
  volveralista() {
    this.busquedaempresa = false;
  }
  getempresas() {
    this.empresaService.getEmpresas().subscribe(
      (res: any) => {
        this.empresas = res;
        console.log(res);
      },
      (err: any) => {
        this.toastr.error('Error en la Api get empresas');
      }
    );
  }
  ngOnInit(): void {
    this.getempresas();
  }
  crear() {
    this.route.navigate(
      [
        'dashboard-municipal',
        'empresa',
        'crear'
      ]
    );
  }
  editar(codigo: any) {
    this.route.navigate(
      [
        'dashboard-municipal',
        'empresa',
        'modificar',
        codigo
      ]
    );
  }

}
