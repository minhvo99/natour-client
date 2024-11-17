import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ToastService } from './toast-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  constructor(
    public toast: ToastService,
    private messageService: MessageService,
  ) {}

  ngOnInit() {}
  onReject() {
    this.messageService.clear();
  }
}
