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
  image: string = "";
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
      this.transaction = this.TransactionListService.getTransactionById(parseInt(this.data));
    });
  }
}
