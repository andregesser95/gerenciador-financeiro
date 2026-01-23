import { Component } from '@angular/core';
import { BalanceCard } from './components/balance-card/balance-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [BalanceCard],
})
export class Home {}
