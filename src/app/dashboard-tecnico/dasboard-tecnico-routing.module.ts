import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTecnicoComponent } from './dashboard-tecnico.component';
import { TecnicoHomeComponent } from './tecnico-home/tecnico-home.component';

const routes: Routes = [
  {
    path: 'dashboard-tecnico',
    component: DashboardTecnicoComponent,
    children: [
      {
        path: 'home',
        component: TecnicoHomeComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardTecnicoRoutingModule { }
