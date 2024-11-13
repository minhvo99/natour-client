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
    { id: 'about', name: 'About', label: 'about', isActive: true },
    { id: 'services', name: 'Services', label: 'services', isActive: true },
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
