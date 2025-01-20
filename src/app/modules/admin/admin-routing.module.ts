import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
      },
      {
        path: 'tour-management',
        loadChildren: () =>
          import('./components/tour-management/tour-management.module').then(
            (m) => m.TourManagementModule,
          ),
      },
      {
        path: 'booking-management',
        loadChildren: () =>
          import(
            './components/booking-management/booking-management.module'
          ).then((m) => m.BookingManagementModule),
      },
      {
        path: 'blog-management',
        loadChildren: () =>
          import('./components/blog-management/blog-management.module').then(
            (m) => m.BlogManagementModule,
          ),
      },
      {
        path: 'user-management',
        loadChildren: () =>
          import('./components/user-management/user-management.module').then(
            (m) => m.UserManagementModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
