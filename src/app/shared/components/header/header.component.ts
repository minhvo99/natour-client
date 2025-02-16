import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Option } from '@app/core/models/constants';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  previousUrl: string | null = null;
  userInfo!: any;

  menus: Option[] = [
    { id: 'home', name: 'Home', label: 'home', isActive: true },
    { id: 'tour', name: 'Tour', label: 'tour', isActive: true },
    { id: 'blog', name: 'Blog', label: 'blog', isActive: true },
    { id: 'contact', name: 'Contact', label: 'contact', isActive: true },
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.previousUrl = event.url;
      }
    });
    const user = this.authService.userValue;
    if (user) {
      this.isLogin = user && user?.token;
    }

    if (this.isLogin) {
      this.menus.push({
        id: 'booking',
        name: 'Booking',
        label: 'booking',
        isActive: true,
      });
      this.getCurrentUser().subscribe({
        next: (res) => {
          this.userInfo = res;
        }
      })
    }
    if (this.authService.isAdmin()) {
      this.menus.push({
        id: 'admin',
        name: 'Admin Portal',
        label: 'admin',
        isActive: true,
      });
    }
  }

  login() {
    this.router.navigate(['/login'], {
      queryParams: { returnUrl: this.previousUrl },
    });
  }

  getCurrentUser() {
    return this.authService.getUserInfo();
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

  onNavigate(option: string) {
    this.router.navigate([option]);
  }

  logOut() {
    this.authService.logout();
    this.isLogin = false;
    this.menus = this.menus.slice(0, 4);
  }
}
