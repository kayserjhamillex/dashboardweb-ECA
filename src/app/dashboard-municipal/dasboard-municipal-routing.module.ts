import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMunicipalComponent } from './dashboard-municipal.component';
import { MunicipalConfigComponent } from './municipal-config/municipal-config.component';
import { MunicipalHelpComponent } from './municipal-help/municipal-help.component';
import { MunicipalHomeComponent } from './municipal-home/municipal-home.component';
import { EditProfileMunicipalComponent } from './profile-municipal/edit-profile-municipal/edit-profile-municipal.component';
import { ViewProfileMunicipalComponent } from './profile-municipal/view-profile-municipal/view-profile-municipal.component';

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
        path: 'configurar',
        component: MunicipalConfigComponent
      },
      {
        path: 'ayuda',
        component: MunicipalHelpComponent
      },
      {
        path: 'perfil',
        children: [
          {
            path: 'ver',
            component: ViewProfileMunicipalComponent
          },
          {
            path: 'modificar',
            component: EditProfileMunicipalComponent
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
export class DashboardMunicipalRoutingModule { }
