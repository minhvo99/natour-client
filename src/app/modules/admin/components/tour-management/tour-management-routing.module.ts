import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourManagementComponent } from './tour-management.component';

const routes: Routes = [
  {
    path: '',
    component: TourManagementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourManagementRoutingModule {}
