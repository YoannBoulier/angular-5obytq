import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AssociationComponent } from './association/association.component';
import { ConsultationComponent } from './consultation/consultation.component';

import { SessionService } from './session.service';
import { GeoApiService } from './geo-api.service';
import { RestApiService } from './rest-api.service';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'creation', component: AccueilComponent },
  { path: 'association', component: AssociationComponent },
  { path: 'consultation', component: ConsultationComponent }
];

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes),
                  BrowserModule, 
                  FormsModule, 
                  HttpClientModule,
                  ReactiveFormsModule ],
  declarations: [ AppComponent, 
                  NavBarComponent, 
                  RegisterComponent,
                  LoginComponent,
                  AccueilComponent,
                  AssociationComponent,
                  ConsultationComponent ],
  exports:      [ NavBarComponent ],
  bootstrap:    [ AppComponent,
                  NavBarComponent ],
  providers: [SessionService, GeoApiService, RestApiService]
})
export class AppModule { }