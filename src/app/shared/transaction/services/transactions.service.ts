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

  public getById(id: string) {
    return this.httClient.get<Transaction>(`http://localhost:3000/transactions/${id}`);
  }

  public post(payload: TransactionPayload) {
    return this.httClient.post<Transaction>('http://localhost:3000/transactions', payload);
  }

  public put(id: number, payload: TransactionPayload) {
    return this.httClient.put<Transaction>(`http://localhost:3000/transactions/${id}`, payload);
  }

  public delete(id: number) {
    return this.httClient.delete(`http://localhost:3000/transactions/${id}`);
  }
}
