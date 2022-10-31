import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBusinessComponent } from './business/create-business/create-business.component';
import { ListBusinessComponent } from './business/list-business/list-business.component';
import { UpdateBusinessComponent } from './business/update-business/update-business.component';
import { DashboardMunicipalComponent } from './dashboard-municipal.component';
import { MunicipalConfigComponent } from './municipal-config/municipal-config.component';
import { MunicipalHelpComponent } from './municipal-help/municipal-help.component';
import { MunicipalHomeComponent } from './municipal-home/municipal-home.component';
import { EditProfileMunicipalComponent } from './profile-municipal/edit-profile-municipal/edit-profile-municipal.component';
import { ViewProfileMunicipalComponent } from './profile-municipal/view-profile-municipal/view-profile-municipal.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { ListProjectComponent } from './project/list-project/list-project.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';

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
        path: 'empresa',
        children: [
          {
            path: 'lista',
            component: ListBusinessComponent
          },
          {
            path: 'crear',
            component: CreateBusinessComponent
          },
          {
            path: 'modificar/:id',
            component: UpdateBusinessComponent
          },
          {
            path: '',
            redirectTo: 'lista',
            pathMatch: 'prefix'
          }
        ]
      },
      {
        path: 'proyecto',
        children: [
          {
            path: 'lista',
            component: ListProjectComponent
          },
          {
            path: 'crear',
            component: CreateProjectComponent
          },
          {
            path: 'modificar/:id',
            component: UpdateProjectComponent
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
export class DashboardMunicipalRoutingModule { }
