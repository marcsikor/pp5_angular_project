import { Component } from '@angular/core';
import { SignInStatusService } from '../sign-in-status.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  constructor(
    private signInStatusService: SignInStatusService
  ){}

  checkCurrentUser(){
    return this.signInStatusService.checkCurrentCredentials();
  }

  logOut(){
    this.signInStatusService.resetUserCredentials();
    alert("You have been signed out successfully");
  }
}
