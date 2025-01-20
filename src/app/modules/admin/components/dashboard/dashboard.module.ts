import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

const imports = [CommonModule, SharedModule, DashboardRoutingModule];

const declarations = [DashboardComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [],
})
export class DashboardModule {}
