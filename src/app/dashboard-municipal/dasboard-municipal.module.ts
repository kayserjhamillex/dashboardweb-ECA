import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardMunicipalRoutingModule } from './dasboard-municipal-routing.module';
import { DashboardMunicipalComponent } from './dashboard-municipal.component';
import { MunicipalHomeComponent } from './municipal-home/municipal-home.component';
import { CreateBusinessComponent } from './business/create-business/create-business.component';
import { UpdateBusinessComponent } from './business/update-business/update-business.component';
import { ListBusinessComponent } from './business/list-business/list-business.component';
import { ListProjectComponent } from './project/list-project/list-project.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { UpdateProjectComponent } from './project/update-project/update-project.component';
import { UpdateHeavyroutesComponent } from './heavyroutes/update-heavyroutes/update-heavyroutes.component';
import { CreateHeavyroutesComponent } from './heavyroutes/create-heavyroutes/create-heavyroutes.component';
import { ListHeavyroutesComponent } from './heavyroutes/list-heavyroutes/list-heavyroutes.component';
import { ViewProfileMunicipalComponent } from './profile-municipal/view-profile-municipal/view-profile-municipal.component';
import { EditProfileMunicipalComponent } from './profile-municipal/edit-profile-municipal/edit-profile-municipal.component';
import { MunicipalHelpComponent } from './municipal-help/municipal-help.component';
import { MunicipalConfigComponent } from './municipal-config/municipal-config.component';


@NgModule({
  declarations: [
    DashboardMunicipalComponent,
    MunicipalHomeComponent,
    CreateBusinessComponent,
    UpdateBusinessComponent,
    ListBusinessComponent,
    ListProjectComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    UpdateHeavyroutesComponent,
    CreateHeavyroutesComponent,
    ListHeavyroutesComponent,
    ViewProfileMunicipalComponent,
    EditProfileMunicipalComponent,
    MunicipalHelpComponent,
    MunicipalConfigComponent
  ],
  imports: [
    CommonModule,
    DashboardMunicipalRoutingModule
  ]
})
export class DashboardMunicipalModule { }
