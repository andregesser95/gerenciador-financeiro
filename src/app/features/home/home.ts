import { Component, signal } from '@angular/core';
import { TransactionType } from '../../shared/transaction/enums/transaction-types.enum';
import { Transaction } from '../../shared/transaction/interfaces/transaction.interface';
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
    { title: 'Salário', value: 200, type: TransactionType.INCOME },
    { title: 'Conta de Luz', value: 100, type: TransactionType.OUTCOME },
    { title: 'Conta de Água', value: 100, type: TransactionType.OUTCOME },
  ]);
}
