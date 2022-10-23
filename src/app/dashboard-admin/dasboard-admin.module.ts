import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
// para los avisos al cliente
import { ToastrModule } from 'ngx-toastr';
// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardAdminRoutingModule } from './dasboard-admin-routing.module';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AuditsComponent } from './audits/audits.component';
import { ListCheckpointsComponent } from './checkpoints/list-checkpoints/list-checkpoints.component';
import { InitializeCheckpointsComponent } from './checkpoints/initialize-checkpoints/initialize-checkpoints.component';
import { TecassignCheckpointsComponent } from './checkpoints/tecassign-checkpoints/tecassign-checkpoints.component';
import { TracingCheckpointsComponent } from './checkpoints/tracing-checkpoints/tracing-checkpoints.component';
import { ViewProfileAdminComponent } from './profile-admin/view-profile-admin/view-profile-admin.component';
import { EditProfileAdminComponent } from './profile-admin/edit-profile-admin/edit-profile-admin.component';
import { AdminHelpComponent } from './admin-help/admin-help.component';
import { AdminConfigComponent } from './admin-config/admin-config.component';


@NgModule({
  declarations: [
    DashboardAdminComponent,
    AdminHomeComponent,
    CreateUserComponent,
    UpdateUserComponent,
    ListUserComponent,
    AuditsComponent,
    ListCheckpointsComponent,
    InitializeCheckpointsComponent,
    TecassignCheckpointsComponent,
    TracingCheckpointsComponent,
    ViewProfileAdminComponent,
    EditProfileAdminComponent,
    AdminHelpComponent,
    AdminConfigComponent
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
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
export class DashboardAdminModule { }
