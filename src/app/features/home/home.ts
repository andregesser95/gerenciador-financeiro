import { Component } from '@angular/core';
import { Balance } from './components/balance/balance';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [Balance],
})
export class Home {}
