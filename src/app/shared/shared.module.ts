import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FilterTourComponent } from './components/filter-tour/filter-tour.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { SkeletonModule } from 'primeng/skeleton';
import { RatingModule } from 'primeng/rating';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

const declarations = [
  HeaderComponent,
  FooterComponent,
  LoadingComponent,
  LoginComponent,
  TourCardComponent,
  UserInfoComponent,
  FilterTourComponent,
  TopbarComponent,
  ConfirmDialogComponent,
];
const imports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  CardModule,
  CarouselModule,
  CardModule,
  ButtonModule,
  AvatarModule,
  SidebarModule,
  MultiSelectModule,
  SkeletonModule,
  RatingModule,
  CheckboxModule,
  PasswordModule,
  InputTextModule,
  DividerModule,
  ProgressSpinnerModule,
  RippleModule,
  ToastModule,
  ConfirmDialogModule,
  TableModule,
  GoogleSigninButtonModule
];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...imports, ...declarations],
})
export class SharedModule {}
