import { Component, signal } from '@angular/core';
import { Transaction } from '../../shared/interfaces/transaction.interface';
import { Balance } from './components/balance/balance';
import { TransactionItem } from './components/transaction-item/transaction-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [Balance, TransactionItem],
})
export class Home {
  transactions = signal<Transaction[]>([
    { title: 'Salário', value: 200, type: 'income' },
    { title: 'Conta de Luz', value: 100, type: 'outcome' },
    { title: 'Conta de Água', value: 100, type: 'outcome' },
  ]);
}
