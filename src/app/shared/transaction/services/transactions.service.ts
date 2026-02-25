import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Transaction, TransactionPayload } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private httClient = inject(HttpClient);

  public getAll() {
    return this.httClient.get<Transaction[]>('http://localhost:3000/transactions');
  }

  post(payload: TransactionPayload) {
    return this.httClient.post<Transaction>('http://localhost:3000/transactions', payload);
  }
}
