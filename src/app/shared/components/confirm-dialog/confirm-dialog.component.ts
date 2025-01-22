import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  providers: [DialogService, DynamicDialogRef, MessageService],
})
export class ConfirmDialogComponent {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}
}
