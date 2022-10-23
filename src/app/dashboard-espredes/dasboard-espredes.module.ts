import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
// para los avisos al cliente
import { ToastrModule } from 'ngx-toastr';
// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardEspredesRoutingModule } from './dasboard-espredes-routing.module';
import { DashboardEspredesComponent } from './dashboard-espredes.component';
import { ViewProfileEspredesComponent } from './profile-espredes/view-profile-espredes/view-profile-espredes.component';
import { EditProfileEspredesComponent } from './profile-espredes/edit-profile-espredes/edit-profile-espredes.component';
import { EspredesHelpComponent } from './espredes-help/espredes-help.component';
import { EspredesConfigComponent } from './espredes-config/espredes-config.component';
import { EspredesHomeComponent } from './espredes-home/espredes-home.component';


@NgModule({
  declarations: [
    DashboardEspredesComponent,
    ViewProfileEspredesComponent,
    EditProfileEspredesComponent,
    EspredesHelpComponent,
    EspredesConfigComponent,
    EspredesHomeComponent
  ],
  imports: [
    CommonModule,
    DashboardEspredesRoutingModule,
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
export class DashboardEspredesModule { }
