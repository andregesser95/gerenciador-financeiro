import { Component, computed, input } from '@angular/core';
import { TransactionType } from '../../../../../../shared/transaction/enums/transaction-types.enum';
import { Transaction } from '../../../../../../shared/transaction/interfaces/transaction.interface';

const CssClasses = {
  [TransactionType.INCOME]: 'income',
  [TransactionType.OUTCOME]: 'outcome',
};

@Component({
  selector: 'app-transaction-value',
  styleUrl: './transaction-value.scss',
  imports: [],
  template: `{{ transaction().value }}`,
  host: {
    '[class]': 'cssClass()',
  },
})
export class TransactionValue {
  transaction = input.required<Transaction>();

  cssClass = computed(() => CssClasses[this.transaction()?.type]);
}
