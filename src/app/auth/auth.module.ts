import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';

const  appRoutes: Routes = [
      {path: 'registration', component: RegistrationComponent},
       {path: 'login', component: LoginComponent}

];
@NgModule({
  declarations: [
    RegistrationComponent, LoginComponent
  ],
  imports: [ CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RegistrationComponent, LoginComponent
  ],
  providers: [],
})
export class AuthModule {}
