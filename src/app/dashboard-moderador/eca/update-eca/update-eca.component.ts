import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Estandar } from 'src/app/models/estandar';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoService } from 'src/app/services/tipo.service';
import { EstandarService } from 'src/app/services/estandar.service';

@Component({
  selector: 'app-update-eca',
  templateUrl: './update-eca.component.html',
  styleUrls: ['./update-eca.component.css']
})
export class UpdateEcaComponent implements OnInit {
  estandar: Estandar = {
    id: 0,
    Contaminante: '',
    ValorAlerta: '',
    ValorPeligro: '',
    TipoId: 0
  };
  elestandar: any;
  tipos: any = [];
  eltipo: any;
  cambio = false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private tipoService: TipoService,
    private activatedRoute: ActivatedRoute,
    private estandarService: EstandarService,
  ) { }
  atras() {
    this.router.navigate(
      [
        'dashboard-admin',
        'estandar',
        'lista'
      ]
    );
  }
  getTipoes() {
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
  elcambio() {
    this.cambio = !this.cambio;
    console.log(this.cambio);
  }
  onOptionsSelectedTipo(event: any) {
    const value = event.target.value;
    this.estandar.TipoId = value;
    this.elcambio();
    const array: any = this.tipos;
    for (const obj of array) {
      if (this.estandar.TipoId == obj.id) {
        this.eltipo = obj.Name;
      }
    }
  }
  ngOnInit(): void {
    this.getTipoes();
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.estandarService.getEstandar(params['id']).subscribe(
        (res:any) => {
          console.log(res);
          this.estandar = res;
          this.eltipo = res.Tipo.Name;
          console.log(this.eltipo);
        },
        (err: any) => console.log(err)
      );
    }
  }
  updateEstandar() {
    const params = this.activatedRoute.snapshot.params;
    this.estandarService.updateEstandar(params['id'], this.estandar).subscribe(
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
