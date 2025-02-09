import { Component, OnDestroy, OnInit } from '@angular/core';
import { ManagementTourService } from '../../services/management-tour.service';
import { catchError, combineLatest, of, Subject, takeUntil } from 'rxjs';
import { ToastService } from '@app/shared/components/toast/toast-service.service';
import { TOAST_STATE } from '@app/shared/modal/toast';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  $destroy: Subject<void> = new Subject<void>();
  isLoading = false;

  data = [
    { key: 'Tours', icon: 'fa-solid fa-plane', value: 0 },
    { key: 'Bookings', icon: 'fa-solid fa-book-open-reader', value: 0 },
    { key: 'Reviews', icon: 'fa-regular fa-eye', value: 0 },
    { key: 'Users', icon: 'pi pi-fw pi-users', value: 0 },
  ];

  tourStast!: any;
  cols = [
    {
      id: '01',
      label: 'Type',
    },
    {
      id: '02',
      label: 'Number of Tours',
    },
    {
      id: '03',
      label: 'Number of Ratings',
    },
    {
      id: '04',
      label: 'Min Price',
    },
    {
      id: '05',
      label: 'Max Price',
    },
    {
      id: '06',
      label: 'Average Price',
    },
    {
      id: '07',
      label: 'Average Rating',
    },
  ];

  constructor(
    private managementTourService: ManagementTourService,
    private toast: ToastService,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    combineLatest([
      this.managementTourService.getAllTours(),
      this.managementTourService.getAllBookings(),
      this.managementTourService.getAllReviews(),
      this.managementTourService.getAllUsers(),
      this.managementTourService.getTourStast(),
    ])
      .pipe(
        takeUntil(this.$destroy),
        catchError((err) => {
          this.isLoading = false;
          this.toast.error(TOAST_STATE.error, err.message);
          return of([], [], [], [], []);
        }),
      )
      .subscribe({
        next: ([tours, bookings, reviews, users, tourStast]) => {
          this.tourStast = tourStast;
          const values = [tours, bookings, reviews, users];
          this.data.forEach(
            (item, index) => (item.value = values[index].total),
          );
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          this.toast.error(TOAST_STATE.error, err.message);
        },
      });
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
