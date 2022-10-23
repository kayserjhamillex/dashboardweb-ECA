import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AguateroHomeComponent } from './aguatero-home/aguatero-home.component';
import { DashboardAguateroComponent } from './dashboard-aguatero.component';

const routes: Routes = [
  {
    path: 'dashboard-aguatero',
    component: DashboardAguateroComponent,
    children: [
      {
        path: 'home',
        component: AguateroHomeComponent
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
export class DashboardAguateroRoutingModule { }
