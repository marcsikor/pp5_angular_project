import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { TransactionListService } from '../transaction-list.service';
import { Transaction } from '../transaction-model';
import { Router } from '@angular/router';

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
    private TransactionListService: TransactionListService,
    private router: Router
  ) {}
  
  onSubmitTransaction(): void{
    this.TransactionListService.addTransaction(this.transaction)
    // console.log(this.transaction.name)
    this.router.navigateByUrl("/history");
  }
}
