import { Component } from '@angular/core';

import { TransactionListService } from '../transaction-list.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  transactionSum: number = this.TransactionListService.getSumOfTransactions();

  constructor(
    private TransactionListService: TransactionListService
  ) {}

}
