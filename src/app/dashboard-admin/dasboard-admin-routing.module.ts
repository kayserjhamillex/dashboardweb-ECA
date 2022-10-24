import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConfigComponent } from './admin-config/admin-config.component';
import { AdminHelpComponent } from './admin-help/admin-help.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuditsComponent } from './audits/audits.component';
import { InitializeCheckpointsComponent } from './checkpoints/initialize-checkpoints/initialize-checkpoints.component';
import { ListCheckpointsComponent } from './checkpoints/list-checkpoints/list-checkpoints.component';
import { TecassignCheckpointsComponent } from './checkpoints/tecassign-checkpoints/tecassign-checkpoints.component';
import { TracingCheckpointsComponent } from './checkpoints/tracing-checkpoints/tracing-checkpoints.component';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { EditProfileAdminComponent } from './profile-admin/edit-profile-admin/edit-profile-admin.component';
import { ViewProfileAdminComponent } from './profile-admin/view-profile-admin/view-profile-admin.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';

const routes: Routes = [
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent,
    children: [
      {
        path: 'home',
        component: AdminHomeComponent
      },
      {
        path: 'configurar',
        component: AdminConfigComponent
      },
      {
        path: 'ayuda',
        component: AdminHelpComponent
      },
      {
        path: 'perfil',
        children: [
          {
            path: 'ver',
            component: ViewProfileAdminComponent
          },
          {
            path: 'modificar',
            component: EditProfileAdminComponent
          },
          {
            path: '',
            redirectTo: 'ver',
            pathMatch: 'prefix'
          }
        ]
      },
      {
        path: 'usuario',
        children: [
          {
            path: 'lista',
            component: ListUserComponent
          },
          {
            path: 'crear',
            component: CreateUserComponent
          },
          {
            path: 'modificar/:id',
            component: UpdateUserComponent
          },
          {
            path: '',
            redirectTo: 'lista',
            pathMatch: 'prefix'
          }
        ]
      },
      {
        path: 'auditoria',
        component: AuditsComponent
      },
      {
        path: 'punto-de-control',
        children: [
          {
            path: 'lista',
            component: ListCheckpointsComponent
          },
          {
            path: 'iniciar',
            component: InitializeCheckpointsComponent
          },
          {
            path: 'seguimiento/:id',
            component: TracingCheckpointsComponent
          },
          {
            path: 'asignar-tecnico/:id',
            component: TecassignCheckpointsComponent
          },
          {
            path: '',
            redirectTo: 'lista',
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
export class DashboardAdminRoutingModule { }
