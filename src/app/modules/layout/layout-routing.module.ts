import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tour',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'tour',
        loadChildren: () =>
          import('../tour/tour.module').then((m) => m.TourModule),
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('../booking/booking.module').then((m) => m.BookingModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('../blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../contact/contact.module').then((m) => m.ContactModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
