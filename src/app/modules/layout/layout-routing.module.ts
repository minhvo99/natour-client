import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path:'assets',
                loadChildren: () => import('../assets/assets.module').then(m => m.AssetsModule)
            },
            {
                path: 'tour',
                loadChildren: () => import('../tour/tour.module').then(m => m.TourModule)
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
