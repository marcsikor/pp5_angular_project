import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../transaction-model';
import { TransactionListService } from '../transaction-list.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.scss'
})
export class TransactionDetailsComponent {
  data: any;
  transaction!: Transaction;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private TransactionListService: TransactionListService 
    ) {
      this.loadData();
    }
      
  loadData() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.data = params.get('id');
      // console.log(typeof this.data);
      this.transaction = this.TransactionListService.getTransactionById(parseInt(this.data));
    });
  }
}
