import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../core/request.service';
import {Task} from './task';
import {HttpHeaders} from '@angular/common/http';
import {TaskUpd} from './taskupd';
import {UserLogin} from '../../../auth/components/login/login';
import {Authdata} from './authdata';
import {User} from './user';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [RequestService]
})
export class TaskComponent implements OnInit {
  private taskForm: Task = new Task();
  private taskFormUpd: TaskUpd = new TaskUpd();
  private errorMessage: string = "";
  private successMessage: string = "";
  private selectedTask: number = -1;
  private selectedTaskText: string = "";
  private userEmail: string = sessionStorage.getItem('username');
  private selectedUser: string = "";

  private selectedName: string ="";
  tasks: Task[] = [];
  task: Task;
  users: User[] = [];
  username: UserLogin;
  constructor(private requestService: RequestService) {
  }

  openForm(){
    document.getElementById('myForm').style.display = 'block';
  }

  selectTask = (id) => {
    this.selectedTask = id;
  };

  selectTaskText = (text) => {
    this.selectedTaskText = text;
  };
  selectUser = (email) => {
    this.selectedUser = email;
  };


  selectName = (name) => {
    this.selectedName = name;
  };
  // if u need to get all task, put what inside getAllTasks into ngOnInit()
  getAllTasks(){
    this.requestService.doGet( 'task', new HttpHeaders()).subscribe((data: any) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }

  ngOnInit() {
    this.requestService.doGet('user/' + sessionStorage.getItem('username') + '/task', new HttpHeaders()).subscribe((data: any) => {
      this.tasks = data;
      console.log(this.tasks);
    })
    ;
  }

  getUsers(){
    this.requestService.doGet('account', new HttpHeaders()).subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    })
    ;
  }

  getText(id: number) {
    this.requestService.doGet('task/' + id, new HttpHeaders()).subscribe((data: any) => {
      this.task = data;
      console.log(this.tasks);
    });
  }
  getUsername() {
    this.requestService.doGet('authenticate/', new HttpHeaders()).subscribe((data: any) => {
      this.username = data;
      console.log(this.tasks);
    });

  }


  createTask = () => {
    if (this.validateView(this.taskForm)) {
      this.taskForm.userEmail = sessionStorage.getItem('username');
      this.requestService.doPost('task', this.taskForm, new HttpHeaders()).subscribe(
        (success) => {
          this.successMessage = 'Task created, redirect to login page';

          this.taskForm.text = "";
          this.taskForm.name = "";
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert("Error");
        }
      );
    }
  }

  shareTask = () => {
    if (this.validateView(this.taskForm)) {
      this.taskFormUpd.id = this.selectedTask;
      this.taskFormUpd.userEmail = this.selectedUser;
      this.taskFormUpd.name = this.selectedName;
      this.taskFormUpd.text = this.selectedTaskText;
      this.requestService.doPost('task', this.taskFormUpd, new HttpHeaders()).subscribe(
        (success) => {
          this.successMessage = 'Task shared, redirect to login page';

          this.taskForm.text = "";
          this.taskForm.name = "";
          window.location.reload();
        },
        (error) => {
          console.log(error);
          alert("Error");
        }
      );
    }
  }
  updateTask = (id: number) => {
    this.taskFormUpd.id = this.selectedTask;
    this.taskFormUpd.name = this.selectedName;
    this.taskFormUpd.userEmail = sessionStorage.getItem('username');

    this.requestService.doPut('task/'+ id, this.taskFormUpd, new HttpHeaders()).subscribe(
        (success) => {
          this.successMessage = 'Task created, redirect to login page';

          this.taskFormUpd.id = -1;
          this.selectedTask = -1;
          alert("Updated")
        },
        (error) => {
          console.log(error);
          alert("Error");
        }
      );
  }

  deleteTask = (id: number) => {
    id = this.selectedTask;
    this.requestService.doDelete('task/'+ id,  new HttpHeaders()).subscribe(
      (success) => {
        this.successMessage = 'Task deleted';

        this.selectedTask = -1;
        window.location.reload();

      },
      (error) => {
        console.log(error);
        alert("Error,choose task to delete");
      }
    );
  }


  validateView = (taskForm: Task) => {
    this.errorMessage = "";
    if (taskForm === undefined) {
      this.errorMessage = "Form not exist";
      return false;
    }
    if (taskForm.name == "") {
      this.errorMessage = "Name is required";
      return false;
    }
    if (taskForm.text == "") {
      this.errorMessage = "Text is required";
      return false;
    }

    return true;
  }



}
