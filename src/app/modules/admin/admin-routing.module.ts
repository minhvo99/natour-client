import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TourManagementComponent } from './components/tour-management/tour-management.component';
import { BookingManagementComponent } from './components/booking-management/booking-management.component';
import { BlogManagementComponent } from './components/blog-management/blog-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'tour-management',
                component: TourManagementComponent,
            },
            {
                path: 'booking-management',
                component: BookingManagementComponent,
            },
            {
                path: 'blog-management',
                component: BlogManagementComponent,
            },
            {
                path: 'user-management',
                component: UserManagementComponent,
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AdminRoutingModule {}
