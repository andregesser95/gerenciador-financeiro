import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { TransactionType } from '../../../../shared/transaction/enums/transaction-types.enum';
import { TransactionPayload } from '../../../../shared/transaction/interfaces/transaction.interface';
import { TransactionsService } from '../../../../shared/transaction/services/transactions.service';
import { FeedbackService } from '../../../../shared/feedback/services/feedback.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAnchor,
    MatButtonModule,
    MatButtonToggleModule,
    NgxMaskDirective,
    JsonPipe,
  ],
})
export class CreateComponent {
  private transactionService = inject(TransactionsService);
  private router = inject(Router);
  private feedbackService = inject(FeedbackService);

  readonly transactionTypes = TransactionType;

  public form = new FormGroup({
    type: new FormControl('', { validators: [Validators.required] }),
    title: new FormControl('', { validators: [Validators.required] }),
    value: new FormControl(0, { validators: [Validators.required] }),
  });

  submit() {
    if (this.form.invalid) {
      return;
    }

    const payload: TransactionPayload = {
      title: this.form.value.title as string,
      type: this.form.value.type as TransactionType,
      value: this.form.value.value as number,
    };

    this.transactionService.post(payload).subscribe({
      next: () => {
        this.feedbackService.success('Transação criada com sucesso!');
        this.router.navigate(['/']);
      },
    });
  }
}
