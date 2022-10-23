import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
// para los avisos al cliente
import { ToastrModule } from 'ngx-toastr';
// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardModeradorRoutingModule } from './dasboard-moderador-routing.module';
import { DashboardModeradorComponent } from './dashboard-moderador.component';
import { ModeradorHomeComponent } from './moderador-home/moderador-home.component';
import { CreateEcaComponent } from './eca/create-eca/create-eca.component';
import { UpdateEcaComponent } from './eca/update-eca/update-eca.component';
import { ListEcaComponent } from './eca/list-eca/list-eca.component';
import { EditProfileModeradorComponent } from './profile-moderador/edit-profile-moderador/edit-profile-moderador.component';
import { ViewProfileModeradorComponent } from './profile-moderador/view-profile-moderador/view-profile-moderador.component';
import { ModeradorHelpComponent } from './moderador-help/moderador-help.component';
import { ModeradorConfigComponent } from './moderador-config/moderador-config.component';


@NgModule({
  declarations: [
    DashboardModeradorComponent,
    ModeradorHomeComponent,
    CreateEcaComponent,
    UpdateEcaComponent,
    ListEcaComponent,
    EditProfileModeradorComponent,
    ViewProfileModeradorComponent,
    ModeradorHelpComponent,
    ModeradorConfigComponent
  ],
  imports: [
    CommonModule,
    DashboardModeradorRoutingModule,
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
export class DashboardModeradorModule { }
