import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { SinglePatientComponent } from './patient-list/single-patient/single-patient.component';
import { HeaderComponent } from './header/header.component';
import {AuthService} from './service/auth.service';
import {PatientsService} from './service/patients.service';
import {AuthGuardService} from './service/auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PatientFormComponent } from './patient-list/patient-form/patient-form.component';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
  {path: 'auth/signup',  component: SignupComponent},
  {path: 'auth/signin',  component: SigninComponent},
  {path: 'patients' , canActivate: [AuthGuardService],component: PatientListComponent},
  {path: 'patients/new',  canActivate: [AuthGuardService],component: PatientFormComponent},
  {path: 'patients/view/:id' , canActivate: [AuthGuardService], component: SinglePatientComponent},
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: '**', redirectTo: 'patients' }

]
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PatientListComponent,
    SinglePatientComponent,
    HeaderComponent,
    PatientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,
    PatientsService,
    AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
