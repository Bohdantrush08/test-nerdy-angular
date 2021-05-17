import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {TaskComponent} from './components/task/task.component';

const  appRoutes: Routes = [
  {path: 'task', component: TaskComponent},

];
@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [ CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    TaskComponent
  ],
  providers: [],
})
export class TaskModule {}
