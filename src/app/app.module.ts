import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpComponent } from './global-components/help/help.component';
import { ViewProfileComponent } from './global-components/view-profile/view-profile.component';
import { EditProfileComponent } from './global-components/edit-profile/edit-profile.component';
import { ConfigComponent } from './global-components/config/config.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
