import { Component, signal } from '@angular/core';
import { Transaction } from '../../shared/transaction/interfaces/transaction.interface';
import { Balance } from './components/balance/balance';
import { NoTransactions } from './components/no-transactions/no-transactions';
import { TransactionItem } from './components/transaction-item/transaction-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [Balance, TransactionItem, NoTransactions],
})
export class Home {
  transactions = signal<Transaction[]>([]);
}
