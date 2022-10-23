import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEspredesComponent } from './dashboard-espredes.component';
import { EspredesHomeComponent } from './espredes-home/espredes-home.component';

const routes: Routes = [
  {
    path: 'dashboard-esperedes',
    component: DashboardEspredesComponent,
    children: [
      {
        path: 'home',
        component: EspredesHomeComponent
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
export class DashboardEspredesRoutingModule { }
