import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardTecnicoRoutingModule } from './dasboard-tecnico-routing.module';
import { DashboardTecnicoComponent } from './dashboard-tecnico.component';
import { TecnicoHomeComponent } from './tecnico-home/tecnico-home.component';
import { ListTecnicoCheckpointsComponent } from './tecnico-checkpoints/list-tecnico-checkpoints/list-tecnico-checkpoints.component';
import { UpdateTecnicoCheckpointsComponent } from './tecnico-checkpoints/update-tecnico-checkpoints/update-tecnico-checkpoints.component';
import { ViewProfileTecnicoComponent } from './profile-tecnico/view-profile-tecnico/view-profile-tecnico.component';
import { EditProfileTecnicoComponent } from './profile-tecnico/edit-profile-tecnico/edit-profile-tecnico.component';
import { TecnicoHelpComponent } from './tecnico-help/tecnico-help.component';
import { TecnicoConfigComponent } from './tecnico-config/tecnico-config.component';


@NgModule({
  declarations: [
    DashboardTecnicoComponent,
    TecnicoHomeComponent,
    ListTecnicoCheckpointsComponent,
    UpdateTecnicoCheckpointsComponent,
    ViewProfileTecnicoComponent,
    EditProfileTecnicoComponent,
    TecnicoHelpComponent,
    TecnicoConfigComponent
  ],
  imports: [
    CommonModule,
    DashboardTecnicoRoutingModule
  ]
})
export class DashboardTecnicoModule { }
