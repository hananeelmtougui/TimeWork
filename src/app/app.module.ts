import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarVerticalComponent } from './components/navbar-vertical/navbar-vertical.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NavListeComponent } from './components/nav-liste/nav-liste.component';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/task/task.component';
import { UsersComponent } from './components/users/users.component';
import { ConsultantTaskComponent } from './components/consultant-task/consultant-task.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarVerticalComponent,
    NavbarComponent,
    HomeComponent,
    NavListeComponent,
    ProjectComponent,
    TaskComponent,
    UsersComponent,
    ConsultantTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
