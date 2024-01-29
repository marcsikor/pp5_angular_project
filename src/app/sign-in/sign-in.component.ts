import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { SignInStatusService } from '../sign-in-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor(
    private signInStatusService: SignInStatusService,
    // private reactiveFormsModule : ReactiveFormsModule ,
    private router: Router
  ) {}

  onSubmit(): void {

    this.signInStatusService.getUserCredentials(this.signInForm.get('username')?.value!, this.signInForm.get('password')?.value!);
    if(this.signInStatusService.checkCurrentCredentials()){
      console.log('Sign in successful!');
      this.router.navigateByUrl("");
    }
    else {
      console.error('Sign in failed!')
    }
  }
}
