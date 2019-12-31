import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';

const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes, { enableTracing: true }),
                  BrowserModule, 
                  FormsModule, 
                  ReactiveFormsModule, 
                  NgbModule ],
  declarations: [ AppComponent, 
                  NavBarComponent, 
                  RegisterComponent,
                  LoginComponent,
                  AccueilComponent ],
  exports:      [ NavBarComponent ],
  bootstrap:    [ AppComponent,
                  NavBarComponent ]
})
export class AppModule { }
