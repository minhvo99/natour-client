import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { TourDetaiComponent } from './tour-detai/tour-detai.component';
import { TourFormComponent } from './tour-form/tour-form.component';
import { TourRoutingModule } from './tour-routing.module';
import { ListToursComponent } from './list-tours/list-tours.component';
import { TourComponent } from './tour.component';
import { TourCardComponent } from './tour-card/tour-card.component';

const imports = [CommonModule, SharedModule, TourRoutingModule];

const declarations = [
  TourComponent,
  TourDetaiComponent,
  TourFormComponent,
  ListToursComponent,
  TourComponent,
  TourCardComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [],
})
export class TourModule {}
