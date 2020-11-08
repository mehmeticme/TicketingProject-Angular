
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserCreateComponent,
    WelcomePageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
    

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
