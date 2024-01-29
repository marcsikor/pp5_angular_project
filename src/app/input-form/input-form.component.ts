import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { TransactionListService } from '../transaction-list.service';
import { Transaction } from '../transaction-model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss'
})
export class InputFormComponent {
  transaction: Transaction = new Transaction();

  // transactionInput = new FormGroup({
  //   name: new FormControl(''),
  //   type: new FormControl(''),
  //   description: new FormControl('')
  // });

  constructor(
    private TransactionListService: TransactionListService
  ) {}
  
  onSubmitTransaction(): void{
    this.TransactionListService.addTransaction(this.transaction)
  }
}
