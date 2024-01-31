import { Component } from '@angular/core';
import { TransactionListService } from '../transaction-list.service';
import { Transaction } from '../transaction-model';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent{
  transactionList: Transaction[] =  this.TransactionListService.getTransactionList();
  // transaction: Transaction = new Transaction();
  constructor (
    private TransactionListService: TransactionListService
  ){}
  
  deleteTransaction(id: number){
    this.TransactionListService.deleteTransaction(id);
  }
}
