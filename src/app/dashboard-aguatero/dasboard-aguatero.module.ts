import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
// para los avisos al cliente
import { ToastrModule } from 'ngx-toastr';
// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardAguateroRoutingModule } from './dasboard-aguatero-routing.module';
import { DashboardAguateroComponent } from './dashboard-aguatero.component';
import { AguateroHomeComponent } from './aguatero-home/aguatero-home.component';
import { CreateValveComponent } from './valve/create-valve/create-valve.component';
import { UpdateValveComponent } from './valve/update-valve/update-valve.component';
import { ListValveComponent } from './valve/list-valve/list-valve.component';
import { EditProfileAguateroComponent } from './profile-aguatero/edit-profile-aguatero/edit-profile-aguatero.component';
import { ViewProfileAguateroComponent } from './profile-aguatero/view-profile-aguatero/view-profile-aguatero.component';
import { AguateroHelpComponent } from './aguatero-help/aguatero-help.component';
import { AguateroConfigComponent } from './aguatero-config/aguatero-config.component';


@NgModule({
  declarations: [
    DashboardAguateroComponent,
    AguateroHomeComponent,
    CreateValveComponent,
    UpdateValveComponent,
    ListValveComponent,
    EditProfileAguateroComponent,
    ViewProfileAguateroComponent,
    AguateroHelpComponent,
    AguateroConfigComponent
  ],
  imports: [
    CommonModule,
    DashboardAguateroRoutingModule,
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
export class DashboardAguateroModule { }
