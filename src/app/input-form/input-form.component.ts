import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { TransactionListService } from '../transaction-list.service';
import { Transaction } from '../transaction-model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss'
})
export class InputFormComponent{
  transaction: Transaction = new Transaction();

  constructor(
    private TransactionListService: TransactionListService,
    private router: Router
    ) {}

  getFile($event: any){
    this.transaction.file = $event.target.files[0];
  }
  
  onSubmitTransaction(f: NgForm): void{
    if (f.invalid) {
      return;
    }
    this.transaction.amount =  Math.round((this.transaction.amount + Number.EPSILON) * 100) / 100
    this.TransactionListService.addTransaction(this.transaction)
    this.router.navigateByUrl("/history");
  }
}
