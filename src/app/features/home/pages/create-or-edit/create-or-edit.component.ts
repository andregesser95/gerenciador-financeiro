import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { FeedbackService } from '../../../../shared/feedback/services/feedback.service';
import { TransactionType } from '../../../../shared/transaction/enums/transaction-types.enum';
import {
  Transaction,
  TransactionPayload,
} from '../../../../shared/transaction/interfaces/transaction.interface';
import { TransactionsService } from '../../../../shared/transaction/services/transactions.service';

@Component({
  selector: 'app-create-or-edit',
  templateUrl: './create-or-edit.component.html',
  styleUrl: './create-or-edit.component.scss',
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
export class CreateOrEditComponent {
  private activatedRouter = inject(ActivatedRoute);
  private transactionService = inject(TransactionsService);
  private router = inject(Router);
  private feedbackService = inject(FeedbackService);

  readonly transactionTypes = TransactionType;

  get transaction(): Transaction {
    return this.activatedRouter.snapshot.data['transaction'];
  }

  get isEdit(): boolean {
    return Boolean(this.transaction);
  }

  public form = new FormGroup({
    type: new FormControl(this.transaction?.type ?? '', { validators: [Validators.required] }),
    title: new FormControl(this.transaction?.title ?? '', { validators: [Validators.required] }),
    value: new FormControl(this.transaction?.value ?? 0, { validators: [Validators.required] }),
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

    if (this.isEdit) {
      this.transactionService.put(this.transaction.id, payload).subscribe({
        next: () => {
          this.feedbackService.success('Transação alterada com sucesso!');
          this.router.navigate(['/']);
        },
      });
    } else {
      this.transactionService.post(payload).subscribe({
        next: () => {
          this.feedbackService.success('Transação criada com sucesso!');
          this.router.navigate(['/']);
        },
      });
    }
  }
}
