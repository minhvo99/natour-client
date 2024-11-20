import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './tour.component';
import { TourDetaiComponent } from './tour-detai/tour-detai.component';

const routes: Routes = [
  {
    path: '',
    component: TourComponent,
  },
  {
    path: ':id',
    component: TourDetaiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourRoutingModule {}
