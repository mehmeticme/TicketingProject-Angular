import { UserCreateComponent } from './user-create/user-create.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'WelcomePage', component: WelcomePageComponent},
  {path: 'AdminUserCreate', component: UserCreateComponent},
  // {path: 'AdminProjectCreate', component: WelcomePageComponent},
  // {path: 'ManagerAssignTask', component: WelcomePageComponent},
  // {path: 'Manager ProjectStatus', component: WelcomePageComponent},
  // {path: 'EmployeePendingTask', component: WelcomePageComponent},
  // {path: 'EmployeeArchive', component: WelcomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
