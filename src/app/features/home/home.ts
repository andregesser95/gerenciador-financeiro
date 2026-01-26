import { Component, signal } from '@angular/core';
import { Balance } from './components/balance/balance';
import { TransactionItem } from './components/transaction-item/transaction-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [Balance, TransactionItem],
})
export class Home {
  transactions = signal([
    { value: 200, type: 'income' },
    { value: 100, type: 'outcome' },
    { value: 100, type: 'outcome' },
  ]);
}
