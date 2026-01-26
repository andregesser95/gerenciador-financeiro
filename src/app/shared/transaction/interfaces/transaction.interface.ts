import { TransactionType } from '../enums/transaction-types.enum';

export interface Transaction {
  title: string;
  value: number;
  type: TransactionType;
}
