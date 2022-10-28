import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AguateroConfigComponent } from './aguatero-config/aguatero-config.component';
import { AguateroHelpComponent } from './aguatero-help/aguatero-help.component';
import { AguateroHomeComponent } from './aguatero-home/aguatero-home.component';
import { DashboardAguateroComponent } from './dashboard-aguatero.component';
import { EditProfileAguateroComponent } from './profile-aguatero/edit-profile-aguatero/edit-profile-aguatero.component';
import { ViewProfileAguateroComponent } from './profile-aguatero/view-profile-aguatero/view-profile-aguatero.component';

const routes: Routes = [
  {
    path: 'dashboard-trabajador-agua',
    component: DashboardAguateroComponent,
    children: [
      {
        path: 'home',
        component: AguateroHomeComponent
      },
      {
        path: 'configurar',
        component: AguateroConfigComponent
      },
      {
        path: 'ayuda',
        component: AguateroHelpComponent
      },
      {
        path: 'perfil',
        children: [
          {
            path: 'ver',
            component: ViewProfileAguateroComponent
          },
          {
            path: 'modificar',
            component: EditProfileAguateroComponent
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
export class DashboardAguateroRoutingModule { }
