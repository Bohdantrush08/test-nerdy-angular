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
export class AuthLoginComponent implements OnInit {

  private userLogin = new UserLogin();

  constructor(private requestService: RequestService,
              private  router: Router) {
  }

  public doLogin = () => {
    this.requestService.doPostLogin('authenticate', this.userLogin, new HttpHeaders()).subscribe(
      (data: any) => {
        sessionStorage.setItem('token', data.body['token']);
        sessionStorage.setItem('username', data.body['username']);
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
