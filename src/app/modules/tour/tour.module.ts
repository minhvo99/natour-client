import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { TourDetaiComponent } from './tour-detai/tour-detai.component';
import { TourFormComponent } from './tour-form/tour-form.component';
import { TourRoutingModule } from './tour-routing.module';


const imports = [CommonModule, SharedModule, TourRoutingModule];

const declarations = [TourDetaiComponent, TourFormComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [],
})
export class TourModule {}
