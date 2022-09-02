import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarVerticalComponent} from "./components/navbar-vertical/navbar-vertical.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {NavListeComponent} from "./components/nav-liste/nav-liste.component";
import {ProjectComponent} from "./components/project/project.component";
import {TaskComponent} from "./components/task/task.component";
import {UsersComponent} from "./components/users/users.component";
import {ConsultantTaskComponent} from "./components/consultant-task/consultant-task.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'navbarVerticale',component:NavbarVerticalComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'navliste',component:NavListeComponent},
  {path:'project',component:ProjectComponent},
  {path:'task',component:TaskComponent},
  {path:'users',component:UsersComponent},
  {path:'consultantTask',component:ConsultantTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
