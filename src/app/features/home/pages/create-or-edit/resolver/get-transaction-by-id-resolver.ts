import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Transaction } from '../../../../../shared/transaction/interfaces/transaction.interface';
import { TransactionsService } from '../../../../../shared/transaction/services/transactions.service';

export const getTransactionByIdResolver: ResolveFn<Transaction> = (route, state) => {
  const transactionsService = inject(TransactionsService);

  const id = route.paramMap.get('id') as string;

  return transactionsService.getById(id);
};
