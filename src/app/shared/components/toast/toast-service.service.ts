import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  showInfor(summary: string, detail: string) {
    Swal.fire({
      icon: 'info',
      title: summary,
      text: detail,
      toast: false,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }

  success(summary: string, detail: string) {
    Swal.fire({
      icon: 'success',
      title: summary,
      text: detail,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }

  error(summary: string, detail: string) {
    Swal.fire({
      icon: 'error',
      title: summary,
      text: detail,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }

  info(summary: string, detail: string) {
    Swal.fire({
      icon: 'info',
      title: summary,
      text: detail,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }

  warning(summary: string, detail: string) {
    Swal.fire({
      icon: 'warning',
      title: summary,
      text: detail,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }
}
