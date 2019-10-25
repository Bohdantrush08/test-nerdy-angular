import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class RequestService {
  private host: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  doPost(url: string, object: any, headers: HttpHeaders) {
    url = this.host + url;
    let token = localStorage.getItem('token');
    if(token != null){
      headers = headers.append('Authorization', 'Bearer ' + token);
    }

    return this.http.post(url, object, {observe: 'response', headers: headers});
  }
  doGet(url: string, headers: HttpHeaders) {
    url = this.host + url;
    let token = localStorage.getItem('token')
    if(token != null){
      headers = headers.append('Authorization', 'Bearer ' + token);
    }
    return this.http.get(url, {headers:headers});
  }


  doPut(url: string, object: any, headers: HttpHeaders) {
    url = this.host + url;
    let token = localStorage.getItem('token')
    if(token != null){
      headers = headers.append('Authorization', 'Bearer ' + token);
    }
    return this.http.put(url, object, {observe:'response', headers:headers});
  }
  doDelete(url: string, headers: HttpHeaders) {
    url = this.host + url;
    let token = localStorage.getItem('token')
    if(token != null){
      headers = headers.append('Authorization', 'Bearer ' + token);
    }
    return this.http.delete(url , {observe:'response', headers:headers});
  }


}
