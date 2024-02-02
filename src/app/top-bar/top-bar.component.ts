import { Component } from '@angular/core';
import { SignInStatusService } from '../sign-in-status.service';
import { TransactionListService } from '../transaction-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  constructor(
    private signInStatusService: SignInStatusService,
    private transactionListService: TransactionListService,
    private router: Router
  ){}

  checkCurrentUser(){
    return this.signInStatusService.checkCurrentCredentials();
  }

  logOut(){
    this.signInStatusService.resetUserCredentials();
    this.transactionListService.deleteAllTransactions();
    this.router.navigateByUrl("");
    alert("You have been signed out successfully");
  }
}
