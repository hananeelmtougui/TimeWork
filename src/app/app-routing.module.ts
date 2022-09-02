import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarVerticalComponent} from "./components/navbar-vertical/navbar-vertical.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'navbarVerticale',component:NavbarVerticalComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
