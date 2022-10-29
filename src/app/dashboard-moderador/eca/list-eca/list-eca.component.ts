import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { TipoService } from 'src/app/services/tipo.service';
import { EstandarDetail } from 'src/app/models/estandardetail';
import { EstandarService } from 'src/app/services/estandar.service';

@Component({
  selector: 'app-list-eca',
  templateUrl: './list-eca.component.html',
  styleUrls: ['./list-eca.component.css']
})
export class ListEcaComponent implements OnInit {
  estandars: any = [];
  estandarsfiltrados: any = [];
  tipos: any = [];
  listafiltrada = true;
  mensaje: any;
  codigoelegido: any;
  eldato: any;
  datillo: any;
  busquedaestandar = false;
  estandar: EstandarDetail = {
    id: 0,
    Contaminante: '',
    ValorAlerta: '',
    ValorPeligro: '',
    TipoId: 0,
    tipo: {
      id: 0,
      Name: '',
      Description: ''
    }
  };
  constructor(
    private route: Router,
    private toastr: ToastrService,
    private tipoService: TipoService,
    private estandarService: EstandarService,
  ) { }
  gettipos() {
    this.tipoService.getTipos().subscribe(
      (res: any) => {
        this.tipos = res;
      },
      (err: any) => {
        this.toastr.error('Error en la Api');
      }
    );
  }
  onOptionsSelectedRol(event: any) {
    const value = event.target.value;
    if (value !== 0 || value !== '') {
      this.estandarService.getfiltertipo(value).subscribe(
        (res: any) => {
          this.estandars = res;
          console.log(res);
        },
        (err: any) => {
          this.toastr.error('Error en la get estandars filtrados');
        }
      );
    } else {
      this.estandarService.getEstandars().subscribe(
        (res: any) => {
          this.estandars = res;
          console.log(res);
        },
        (err: any) => {
          this.toastr.error('Error en la Api get estandars');
        }
      );
    }
  }
  getestandars() {
    this.estandarService.getEstandars().subscribe(
      (res: any) => {
        this.estandars = res;
        console.log(res);
      },
      (err: any) => {
        this.toastr.error('Error en la Api get estandars');
      }
    );
  }
  ngOnInit(): void {
    this.gettipos();
    this.getestandars();
  }
  crear() {
    this.route.navigate(
      [
        'dashboard-moderador',
        'estandar',
        'crear'
      ]
    );
  }
  editar(codigo: any) {
    this.route.navigate(
      [
        'dashboard-moderador',
        'estandar',
        'modificar',
        codigo
      ]
    );
  }

}
