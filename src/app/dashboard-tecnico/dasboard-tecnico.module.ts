import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
// para los avisos al cliente
import { ToastrModule } from 'ngx-toastr';
// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    DashboardTecnicoRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    DatePipe,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class DashboardTecnicoModule { }
