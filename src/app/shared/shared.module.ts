import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import { LoginComponent } from './components/login/login.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import {AvatarModule} from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FilterTourComponent } from './components/filter-tour/filter-tour.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { SkeletonModule } from 'primeng/skeleton';
import { RatingModule } from 'primeng/rating';

const declarations = [
  HeaderComponent,
  FooterComponent,
  LoadingComponent,
  LoginComponent,
  ToastComponent,
  TourCardComponent,
  UserInfoComponent,
  FilterTourComponent
];
const imports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatDialogModule,
  CardModule,
  CarouselModule,
  CardModule,
  ButtonModule,
  AvatarModule,
  MatCardModule,
  SidebarModule,
  MultiSelectModule,
  SkeletonModule,
  RatingModule,
];

const importsPrimeNg = [ToastModule];

@NgModule({
  imports: [...imports, ...importsPrimeNg],
  declarations: [...declarations],
  exports: [...imports, ...declarations, ...importsPrimeNg],
})
export class SharedModule {}
