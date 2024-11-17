import { Injectable } from '@angular/core';
import { TOAST_STATE } from '@app/shared/modal/toast';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
interface ToastMessage {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

interface Severity {
  severity: 'success' | 'info' | 'warn' | 'error';
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  success(summary: string, detail: string) {
    this.messageService.add({
      severity: 'success',
      summary: summary,
      detail: detail,
    });
  }

  error(summary: string, detail: string) {
    this.messageService.add({
      severity: 'error',
      summary: summary,
      detail: detail,
    });
  }

  info(summary: string, detail: string) {
    this.messageService.add({
      severity: 'info',
      summary: summary,
      detail: detail,
    });
  }

  warning(summary: string, detail: string) {
    this.messageService.add({
      severity: 'warn',
      summary: summary,
      detail: detail,
    });
  }

  clear() {
    this.messageService.clear();
  }
}
