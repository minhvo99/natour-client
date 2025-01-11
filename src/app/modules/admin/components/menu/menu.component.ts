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
                  { label: 'Landing page', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
              ]
          },
          {
              label: 'Tour managerment',
              items: [
                  { label: 'Tours', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/tour-management'] },
                  { label: 'Booking', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/booking-management'] },
                  { label: 'Blog', icon: 'pi pi-fw pi-bookmark', routerLink: ['/admin/blog-management'] },
                  { label: 'Users', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/admin/user-management'] },
              ]
          },
      ];
  }
}
