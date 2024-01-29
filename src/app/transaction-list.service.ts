import { Injectable } from '@angular/core';

import { Transaction } from './transaction-model';

@Injectable({
  providedIn: 'root'
})
export class TransactionListService {
  transactionList: Transaction[] = [];
  constructor() { }

  addTransaction(transaction: Transaction){
    this.transactionList.push(transaction);
  }
  getTransactionList():Transaction[]{
    return this.transactionList;
  }

}
