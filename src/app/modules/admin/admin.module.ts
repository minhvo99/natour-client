import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemComponent } from './components/menuitem/menuitem.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const imports = [CommonModule, AdminRoutingModule, SharedModule];

const declarations = [
  AdminComponent,
  MenuComponent,
  MenuitemComponent,
  SidebarComponent,
];
@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [AdminComponent],
})
export class AdminModule {}
