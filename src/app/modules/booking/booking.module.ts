import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';

const imports = [CommonModule, SharedModule, BookingRoutingModule];

const declarations = [
  BookingComponent
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [],
})
export class BookingModule {}
