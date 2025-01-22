import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private confirmationService: ConfirmationService) {}

  openDialog(options: {
    type: 'information' | 'confirmation';
    header?: string;
    message?: string;
    icon?: string;
    accept?: () => void;
    reject?: () => void;
  }) {
    const dialogOptions: any = {
      header: options.header || (options.type === 'information' ? 'Information' : 'Confirmation'),
      message: options.message || (options.type === 'information' ? 'This is an information dialog.' : 'Are you sure?'),
      icon: options.icon || (options.type === 'information' ? 'pi pi-info-circle' : 'pi pi-question'),
      accept: options.accept,
    };

    if (options.type === 'confirmation') {
      dialogOptions.reject = options.reject;
      dialogOptions.acceptLabel = 'OK';
      dialogOptions.rejectLabel = 'Cancel';
    } else {
      dialogOptions.rejectVisible = false;
      dialogOptions.acceptLabel = 'OK';
    }

    this.confirmationService.confirm(dialogOptions);
  }
}
