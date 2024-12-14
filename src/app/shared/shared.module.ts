import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { LoginComponent } from './components/login/login.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TourCardComponent } from './components/tour-card/tour-card.component';
import {AvatarModule} from 'primeng/avatar';

const declarations = [
  HeaderComponent,
  FooterComponent,
  LoadingComponent,
  LoginComponent,
  ToastComponent,
  TourCardComponent
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
  MatCardModule,
  CarouselModule,
  CardModule,
  ButtonModule,
  AvatarModule
];

const importsPrimeNg = [ToastModule];

@NgModule({
  imports: [...imports, ...importsPrimeNg],
  declarations: [...declarations],
  exports: [...imports, ...declarations, ...importsPrimeNg],
})
export class SharedModule {}
