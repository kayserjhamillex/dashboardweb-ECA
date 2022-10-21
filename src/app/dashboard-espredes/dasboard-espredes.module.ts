import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardEspredesRoutingModule } from './dasboard-espredes-routing.module';
import { DashboardEspredesComponent } from './dashboard-espredes.component';
import { ViewProfileEspredesComponent } from './profile-espredes/view-profile-espredes/view-profile-espredes.component';
import { EditProfileEspredesComponent } from './profile-espredes/edit-profile-espredes/edit-profile-espredes.component';
import { EspredesHelpComponent } from './espredes-help/espredes-help.component';
import { EspredesConfigComponent } from './espredes-config/espredes-config.component';


@NgModule({
  declarations: [
    DashboardEspredesComponent,
    ViewProfileEspredesComponent,
    EditProfileEspredesComponent,
    EspredesHelpComponent,
    EspredesConfigComponent
  ],
  imports: [
    CommonModule,
    DashboardEspredesRoutingModule
  ]
})
export class DashboardEspredesModule { }
