import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../core/request.service';
import {Task} from './task';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [RequestService]
})
export class TaskComponent implements OnInit {

tasks: Task[] = [];

  constructor(private requestService: RequestService) {
  }
  ngOnInit() {
    this.requestService.doGet('task', new HttpHeaders()).subscribe((data: any) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }
  getText(id: number) {
    this.requestService.doGet('task/' + id, new HttpHeaders()).subscribe((data: any) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }

}
