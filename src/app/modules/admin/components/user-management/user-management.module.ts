import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { UserManagementRoutingModule } from './user-manament-routing.module';
import { UserManagementComponent } from './user-management.component';

const imports = [CommonModule, SharedModule, UserManagementRoutingModule ];

const declarations = [UserManagementComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [],
})
export class UserManagementModule {}
