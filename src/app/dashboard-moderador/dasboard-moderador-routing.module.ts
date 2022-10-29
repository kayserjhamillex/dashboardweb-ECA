import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModeradorComponent } from './dashboard-moderador.component';
import { CreateEcaComponent } from './eca/create-eca/create-eca.component';
import { ListEcaComponent } from './eca/list-eca/list-eca.component';
import { UpdateEcaComponent } from './eca/update-eca/update-eca.component';
import { ModeradorConfigComponent } from './moderador-config/moderador-config.component';
import { ModeradorHelpComponent } from './moderador-help/moderador-help.component';
import { ModeradorHomeComponent } from './moderador-home/moderador-home.component';
import { EditProfileModeradorComponent } from './profile-moderador/edit-profile-moderador/edit-profile-moderador.component';
import { ViewProfileModeradorComponent } from './profile-moderador/view-profile-moderador/view-profile-moderador.component';

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
        path: 'configurar',
        component: ModeradorConfigComponent
      },
      {
        path: 'ayuda',
        component: ModeradorHelpComponent
      },
      {
        path: 'perfil',
        children: [
          {
            path: 'ver',
            component: ViewProfileModeradorComponent
          },
          {
            path: 'modificar',
            component: EditProfileModeradorComponent
          },
          {
            path: '',
            redirectTo: 'ver',
            pathMatch: 'prefix'
          }
        ]
      },
      {
        path: 'estandar',
        children: [
          {
            path: 'lista',
            component: ListEcaComponent
          },
          {
            path: 'crear',
            component: CreateEcaComponent
          },
          {
            path: 'modificar/:id',
            component: UpdateEcaComponent
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
export class DashboardModeradorRoutingModule { }
