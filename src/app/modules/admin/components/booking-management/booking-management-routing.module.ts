import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingManagementComponent } from './booking-management.component';

const routes: Routes = [
  {
    path: '',
    component: BookingManagementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingManagementRoutingModule {}
