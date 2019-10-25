import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/request.service';
import {UserLogin} from './login';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'sn-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private userLogin = new UserLogin();

  constructor(private requestService: RequestService,
              private  router: Router) {
  }

  public doLogin = () => {
    this.requestService.doPost('authenticate', this.userLogin, new HttpHeaders()).subscribe(
      (success) => {
        localStorage.setItem('token', success.body['token']);
        setTimeout(() => {
          this.router.navigate(['/task']);
        }, 1000);
      },
      (error) => {
        console.log(error);
        alert('Error');
      }
    );
  }

  ngOnInit(): void { }
}
