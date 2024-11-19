import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Option } from '@app/core/models/constants';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin = false;

  menus: Option[] = [
    { id: 'home', name: 'Home', label: 'home', isActive: true },
    { id: 'tour', name: 'Tour', label: 'tour', isActive: true },
    { id: 'booking', name: 'Booking', label: 'booking', isActive: true },
    { id: 'blog', name: 'Blog', label: 'blog', isActive: true },
    { id: 'contact', name: 'Contact', label: 'contact', isActive: true },
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const user = this.authService.userValue;
    if (user) {
      this.isLogin = user.user && user?.token;
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

  onNavigate(option: string) {
    this.router.navigate([option]);
  }

  logOut () {
    this.authService.logout();
    this.isLogin = false;
  }
}
