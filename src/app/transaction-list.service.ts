import { Injectable } from '@angular/core';

import { Transaction } from './transaction-model';

@Injectable({
  providedIn: 'root'
})
export class TransactionListService {
  transactionList: Transaction[] = [];
  constructor() { }

  addTransaction(transaction: Transaction){
    transaction.id = this.getNewId();
    this.transactionList.push(transaction);
  }
  getTransactionList():Transaction[]{
    return this.transactionList;
  }
  private getNewId(){
    return this.transactionList.length != 0 ? Math.max(...this.transactionList.map(a => a.id)) + 1 : 1;
  }
  deleteTransaction(id: number){
    const targetIndex = this.transactionList.findIndex(object => {return object.id === id});
    this.transactionList.splice(targetIndex,1);
  }
  getTransactionById(id: number){
    const targetIndex = this.transactionList.findIndex(object => {return object.id === id});
    return this.transactionList[targetIndex];
  }
  getSumOfTransactions(){
    let sum: number = 0;
    const amounts: number[] = this.transactionList.map(a => a.amount);
    if (this.transactionList.length != 0) {
      for (let i = 0; i < amounts.length; i++ ) {
        sum += parseFloat(amounts[i].toString()); // don't want to know ;_;
      }
    }
    return sum;
  }
}
