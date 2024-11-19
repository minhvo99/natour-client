import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [AdminComponent],
    imports: [CommonModule, AdminRoutingModule, SharedModule],
    exports: [AdminComponent],
})
export class AdminModule {}
