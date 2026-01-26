import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.html',
  styleUrl: './transaction-item.scss',
  imports: [MatCardModule, MatButtonModule],
})
export class TransactionItem {}
