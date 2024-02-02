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
  errorMessage: string = '';

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

    this.signInStatusService.setUserCredentials(this.signInForm.get('username')?.value!, this.signInForm.get('password')?.value!);
    if(this.signInStatusService.checkCurrentCredentials()){
      console.log('Sign in successful!');
      this.router.navigateByUrl("");
    }
    else {
      this.errorMessage = 'Sign in failed! Email or password might be wrong'
      console.error('Sign in failed!')
    }
  }
}
