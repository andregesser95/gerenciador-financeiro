import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogData } from '../interfaces/dialog-data.interface';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>{{ dialogData.title }}</h2>
    <mat-dialog-content>{{ dialogData.message }}</mat-dialog-content>
    <mat-dialog-actions>
      <button matButton [mat-dialog-close]="false">{{ dialogData.noBtnText }}</button>
      <button matButton [mat-dialog-close]="true" cdkFocusInitial>
        {{ dialogData.yesBtnText }}
      </button>
    </mat-dialog-actions>
  `,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ConfirmationDialogComponent>);
  readonly dialogData = inject<DialogData>(MAT_DIALOG_DATA);
}
