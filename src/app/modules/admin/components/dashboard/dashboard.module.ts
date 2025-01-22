import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardItemComponent } from '../card-item/card-item.component';

const imports = [CommonModule, SharedModule, DashboardRoutingModule];

const declarations = [
  DashboardComponent,
  CardItemComponent
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [],
})
export class DashboardModule {}
