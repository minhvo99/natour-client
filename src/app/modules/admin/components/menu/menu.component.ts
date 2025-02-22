import { Component } from '@angular/core';
import { LayoutService } from '@app/modules/admin/services/layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
      this.model = [
          {
              label: 'Home',
              items: [
                  { label: 'Landing page', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                  { label: 'Dashboard', icon: 'fa-solid fa-gauge', routerLink: ['/admin/'] }
              ]
          },
          {
              label: 'Tour managerment',
              items: [
                  { label: 'Tours', icon: 'fa-solid fa-plane', routerLink: ['/admin/tour-management'] },
                  { label: 'Booking', icon: 'fa-solid fa-book-open-reader', routerLink: ['/admin/booking-management'] },
                  { label: 'Blog', icon: 'fa-solid fa-blog', routerLink: ['/admin/blog-management'] },
                  { label: 'Users', icon: 'pi pi-fw pi-users', routerLink: ['/admin/user-management'] },
              ]
          },
      ];
  }
}
