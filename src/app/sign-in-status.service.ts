import { Injectable } from '@angular/core';
import { credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class SignInStatusService {
  username = '';
  password = '';

  constructor() { }

  getUserCredentials(username: string, password: string){
    this.username = username;
    this.password = password;
  }

  checkCurrentCredentials(){
    if (this.username === credentials[0] && this.password === credentials[1]){
      return true;
    }
    else {
      return false;
    }
  }
}
