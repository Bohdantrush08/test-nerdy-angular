import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {RequestService} from './core/request.service';
import {AuthModule} from './auth/auth.module';
import { TaskComponent } from './order/components/task/task.component';
import {TaskModule} from './order/task.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    TaskModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
