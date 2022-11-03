import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-checkpoints',
  templateUrl: './list-checkpoints.component.html',
  styleUrls: ['./list-checkpoints.component.css']
})
export class ListCheckpointsComponent implements OnInit {
  checkpoints: any = [];
  grafica = false;
  datillo: any;
  estados: any = [
    {
      id: 1,
      nombre: 'iniciado'
    },
    {
      id: 2,
      nombre: 'por implementar'
    },
    {
      id: 3,
      nombre: 'operativo'
    },
    {
      id: 4,
      nombre: 'mantenimiento'
    },
    {
      id: 5,
      nombre: 'malogrado'
    },
    {
      id: 6,
      nombre: 'urtado'
    }
  ];
  constructor(
    private route: Router,
    private toastr: ToastrService,
  ) { }
  cambio() {
    this.grafica = !this.grafica;
  }
  onOptionsSelectedRol(event: any) {
    const value = event.target.value;

  }
  ngOnInit(

  ): void {
  }
  crear() {
    this.route.navigate(
      [
        'dashboard-admin',
        'punto-de-control',
        'iniciar'
      ]
    );
  }
  tecnico(codigo: any) {
    this.route.navigate(
      [
        'dashboard-admin',
        'punto-de-control',
        'asignar-tecnico',
        codigo
      ]
    );
  }
  editar(codigo: any) {
    this.route.navigate(
      [
        'dashboard-admin',
        'punto-de-control',
        'seguimiento',
        codigo
      ]
    );
  }
}
