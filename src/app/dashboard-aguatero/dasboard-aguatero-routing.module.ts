import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AguateroConfigComponent } from './aguatero-config/aguatero-config.component';
import { AguateroHelpComponent } from './aguatero-help/aguatero-help.component';
import { AguateroHomeComponent } from './aguatero-home/aguatero-home.component';
import { DashboardAguateroComponent } from './dashboard-aguatero.component';
import { EditProfileAguateroComponent } from './profile-aguatero/edit-profile-aguatero/edit-profile-aguatero.component';
import { ViewProfileAguateroComponent } from './profile-aguatero/view-profile-aguatero/view-profile-aguatero.component';
import { CreateValveComponent } from './valve/create-valve/create-valve.component';
import { ListValveComponent } from './valve/list-valve/list-valve.component';
import { UpdateValveComponent } from './valve/update-valve/update-valve.component';

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
        path: 'valvula',
        children: [
          {
            path: 'lista',
            component: ListValveComponent
          },
          {
            path: 'crear',
            component: CreateValveComponent
          },
          {
            path: 'modificar/:id',
            component: UpdateValveComponent
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
