import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMunicipalComponent } from './dashboard-municipal.component';
import { MunicipalHomeComponent } from './municipal-home/municipal-home.component';

const routes: Routes = [
  {
    path: 'dashboard-municipal',
    component: DashboardMunicipalComponent,
    children: [
      {
        path: 'home',
        component: MunicipalHomeComponent
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
export class DashboardMunicipalRoutingModule { }
