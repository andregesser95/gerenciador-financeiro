import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
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
export class Home implements OnInit {
  private httClient = inject(HttpClient);

  transactions = signal<Transaction[]>([]);

  ngOnInit(): void {
    this.getTransactions();
  }

  private getTransactions() {
    this.httClient
      .get<Transaction[]>('http://localhost:3000/transactions')
      .subscribe((transactions) => {
        this.transactions.set(transactions);
      });
  }
}
