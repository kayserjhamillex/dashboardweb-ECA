import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// modulos principales
import { AuthModule } from './auth/auth.module';
import { DashboardAdminModule } from './dashboard-admin/dasboard-admin.module';
import { DashboardTecnicoModule } from './dashboard-tecnico/dasboard-tecnico.module';
import { DashboardAguateroModule } from './dashboard-aguatero/dasboard-aguatero.module';
import { DashboardEspredesModule } from './dashboard-espredes/dasboard-espredes.module';
import { DashboardModeradorModule } from './dashboard-moderador/dasboard-moderador.module';
import { DashboardMunicipalModule } from './dashboard-municipal/dasboard-municipal.module';
// para el servidor apirest
import { HttpClientModule } from '@angular/common/http';
// problema del refresheo
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
// componentes globales
import { HelpComponent } from './global-components/help/help.component';
import { ConfigComponent } from './global-components/config/config.component';
import { ViewProfileComponent } from './global-components/view-profile/view-profile.component';
import { EditProfileComponent } from './global-components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    ViewProfileComponent,
    EditProfileComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    DashboardAdminModule,
    DashboardAguateroModule,
    DashboardEspredesModule,
    DashboardModeradorModule,
    DashboardMunicipalModule,
    DashboardTecnicoModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
