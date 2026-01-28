import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Transaction } from '../../../../shared/transaction/interfaces/transaction.interface';
import { TransactionValue } from './components/transaction-value/transaction-value';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.html',
  styleUrl: './transaction-item.scss',
  imports: [MatCardModule, MatButtonModule, TransactionValue],
})
export class TransactionItem {
  transaction = input.required<Transaction>();
}
