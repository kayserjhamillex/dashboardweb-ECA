import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTecnicoComponent } from './dashboard-tecnico.component';
import { EditProfileTecnicoComponent } from './profile-tecnico/edit-profile-tecnico/edit-profile-tecnico.component';
import { ViewProfileTecnicoComponent } from './profile-tecnico/view-profile-tecnico/view-profile-tecnico.component';
import { TecnicoConfigComponent } from './tecnico-config/tecnico-config.component';
import { TecnicoHelpComponent } from './tecnico-help/tecnico-help.component';
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
        path: 'configurar',
        component: TecnicoConfigComponent
      },
      {
        path: 'ayuda',
        component: TecnicoHelpComponent
      },
      {
        path: 'perfil',
        children: [
          {
            path: 'ver',
            component: ViewProfileTecnicoComponent
          },
          {
            path: 'modificar',
            component: EditProfileTecnicoComponent
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
export class DashboardTecnicoRoutingModule { }
