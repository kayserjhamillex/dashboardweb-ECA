import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModeradorComponent } from './dashboard-moderador.component';
import { ModeradorHomeComponent } from './moderador-home/moderador-home.component';

const routes: Routes = [
  {
    path: 'dashboard-moderador',
    component: DashboardModeradorComponent,
    children: [
      {
        path: 'home',
        component: ModeradorHomeComponent
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
export class DashboardModeradorRoutingModule { }
