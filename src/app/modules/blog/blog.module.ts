import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

const imports = [CommonModule, SharedModule, BlogRoutingModule];

const declarations = [
  BlogComponent
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [],
})
export class BlogModule {}
