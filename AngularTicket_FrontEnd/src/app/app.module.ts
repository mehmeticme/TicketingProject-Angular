import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectCreateComponent } from './project-create/project-create.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserCreateComponent,
    WelcomePageComponent,
    NavbarComponent,
    ProjectCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
    
    

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
