import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../../core/request.service';
import {RegistrationForm} from './registration';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: RegistrationForm = new RegistrationForm();
  private successMessage: string = "";
  constructor(private  requestService: RequestService,
              private router: Router) {}
  ngOnInit() {
  }
  doRegistration = () => {
    this.requestService.doPost('account', this.registrationForm, new HttpHeaders()).subscribe(
      (success) => {
        alert(success);
        this.successMessage = 'User created, redirect to login page';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      },
      (error) => {
        console.log(error);
        alert("Error");
      }
    );
  }
}
