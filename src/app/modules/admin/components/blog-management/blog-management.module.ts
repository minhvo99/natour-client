
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { BlogManagementComponent } from './blog-management.component';
import { BlogManagementRoutingModule } from './blog-management-routing.module';

const imports = [
    CommonModule,
    SharedModule,
    BlogManagementRoutingModule
];

const declarations = [
    BlogManagementComponent,
]

@NgModule({
    imports: [...imports],
    declarations: [declarations],
})
export class BlogManagementModule {}