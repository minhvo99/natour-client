import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { BookingManagementComponent } from './booking-management.component';
import { BookingManagementRoutingModule } from './booking-management-routing.module';

const imports = [CommonModule, SharedModule, BookingManagementRoutingModule];

const declarations = [BookingManagementComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [],
})
export class BookingManagementModule {}
