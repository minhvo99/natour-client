import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent{
  isOpenDialog = false;
  @Output() logOutEvent = new EventEmitter<void>();
  @Input() userInfo: any;

  openDialog() {
    this.isOpenDialog = true;
  }

  logOut () {
    this.logOutEvent.emit();
  }

  getAvatar() {
    const firstChar = this.userInfo?.name?.charAt(0).toUpperCase() || 'U';
    const avatarUrl = this.userInfo?.photo ? this.userInfo?.photo : null;
    return { firstChar, avatarUrl };
  }
}


