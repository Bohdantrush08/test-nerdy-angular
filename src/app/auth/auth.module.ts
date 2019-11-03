import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import {AuthLoginComponent} from './components/login/login.component';

const  appRoutes: Routes = [
       {path: '', component: AuthLoginComponent},
      {path: 'registration', component: RegistrationComponent},
       {path: 'login', component: AuthLoginComponent}

];
@NgModule({
  declarations: [
    RegistrationComponent, AuthLoginComponent
  ],
  imports: [ CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RegistrationComponent, AuthLoginComponent
  ],
  providers: [],
})
export class AuthModule {}
