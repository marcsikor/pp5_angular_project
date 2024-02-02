import { Component } from '@angular/core';

import { TransactionListService } from '../transaction-list.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  transactionSumEUR: number = this.TransactionListService.getSumOfTransactions("EUR");
  transactionSumPLN: number = this.TransactionListService.getSumOfTransactions("PLN");
  transactionSumUSD: number = this.TransactionListService.getSumOfTransactions("USD");

  constructor(
    private TransactionListService: TransactionListService
  ) {}

}
