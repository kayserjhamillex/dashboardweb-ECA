import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Estandar } from 'src/app/models/estandar';
import { TipoService } from 'src/app/services/tipo.service';
import { EstandarService } from 'src/app/services/estandar.service';

@Component({
  selector: 'app-create-eca',
  templateUrl: './create-eca.component.html',
  styleUrls: ['./create-eca.component.css']
})
export class CreateEcaComponent implements OnInit {
  estandar: Estandar = {
    id: 0,
    Contaminante: '',
    ValorAlerta: '',
    ValorPeligro: '',
    TipoId: 0
  };
  elestandar: any;
  tipos: any = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tipoService: TipoService,
    private estandarService: EstandarService,
  ) { }
  atras() {
    this.router.navigate(
      [
        'dashboard-moderador',
        'estandar',
        'lista'
      ]
    );
  }
  gettipos() {
    this.tipoService.getTipos().subscribe(
      (res: any) => {
        this.tipos = res;
        console.log(res);
      },
      (err: any) => {
        this.toastr.error('Error en la Api');
      }
    );
  }
  onOptionsSelectedTipo(event: any) {
    const value = event.target.value;
    this.estandar.TipoId = value;
    console.log(value);
  }
  saveEstandar() {
    delete this.estandar.id;
    console.log(this.estandar);
    // this.admin.Password = this.admin.Phone;
    // llamando a servicio de creacion que esta enlazada con el api
    this.estandarService.saveEstandar(this.estandar).subscribe(
      (res: any) => {
        console.log(res);
        this.elestandar = res;
        this.router.navigate(
          [
            'dashboard-moderador',
            'estandar',
            'lista'
          ]
        );
        this.toastr.success('Nuevo estandar creado');
      },
      (err: any) => {
        console.error(err);
        this.toastr.error('no se pudo crear un nuevo estandar');
      }
    );
  }
  ngOnInit(): void {
    this.gettipos();
    // this.usuario = JSON.parse(localStorage.getItem('admin'));
  }

}
