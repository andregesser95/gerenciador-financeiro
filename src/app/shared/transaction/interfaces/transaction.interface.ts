import { TransactionType } from '../enums/transaction-types.enum';

export interface Transaction {
  id: number;
  title: string;
  type: TransactionType;
  value: number;
}
