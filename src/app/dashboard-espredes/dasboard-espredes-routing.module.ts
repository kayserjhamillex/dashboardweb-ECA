import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEspredesComponent } from './dashboard-espredes.component';
import { EspredesConfigComponent } from './espredes-config/espredes-config.component';
import { EspredesHelpComponent } from './espredes-help/espredes-help.component';
import { EspredesHomeComponent } from './espredes-home/espredes-home.component';
import { EditProfileEspredesComponent } from './profile-espredes/edit-profile-espredes/edit-profile-espredes.component';
import { ViewProfileEspredesComponent } from './profile-espredes/view-profile-espredes/view-profile-espredes.component';

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
        path: 'configurar',
        component: EspredesConfigComponent
      },
      {
        path: 'ayuda',
        component: EspredesHelpComponent
      },
      {
        path: 'perfil',
        children: [
          {
            path: 'ver',
            component: ViewProfileEspredesComponent
          },
          {
            path: 'modificar',
            component: EditProfileEspredesComponent
          },
          {
            path: '',
            redirectTo: 'ver',
            pathMatch: 'prefix'
          }
        ]
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
