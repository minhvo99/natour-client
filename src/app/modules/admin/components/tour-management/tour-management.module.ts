import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { TourManagementComponent } from './tour-management.component';
import { TourManagementRoutingModule } from './tour-management-routing.module';

const imports = [CommonModule, SharedModule,TourManagementRoutingModule ];

const declarations = [TourManagementComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [],
})
export class TourManagementModule {}
