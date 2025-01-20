import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { BlogManagementComponent } from './blog-management.component';

const route: Routes = [
  {
    path: '',
    component: BlogManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class BlogManagementRoutingModule {}
