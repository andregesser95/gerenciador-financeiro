import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss',
  imports: [MatCardModule],
})
export class BalanceCard {
  type = input.required<'income' | 'outcome' | 'balance'>();
  label = input.required<string>();
  value = input.required<number>();
}
