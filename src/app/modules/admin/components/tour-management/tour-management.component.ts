import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardStateService } from '../../services/dashboard-state.service';
import { ManagementTourService } from '../../services/management-tour.service';
import { ToastService } from '@app/shared/components/toast/toast-service.service';
import { Tour } from '@app/shared/modal/tour';
import { map, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tour-management',
  templateUrl: './tour-management.component.html',
  styleUrls: ['./tour-management.component.scss'],
})
export class TourManagementComponent implements OnInit, OnDestroy {
  tours!: Tour[];
  destroy$ = new Subject<void>();
  isLoading = false;
  cols = [
    {
      id: '01',
      label: 'Name',
    },
    {
      id: '02',
      label: 'Duration',
    },
    {
      id: '03',
      label: 'Max Group Size',
    },
    {
      id: '04',
      label: 'Difficulty',
    },
    {
      id: '05',
      label: 'Price',
    },
    {
      id: '06',
      label: 'Summary',
    },
    {
      id: '07',
      label: 'Description',
    },
    {
      id: '08',
      label: 'Image',
    },
    {
      id: '09',
      label: 'Start Location',
    },
    {
      id: '10',
      label: 'Guides',
    },
    {
      id: '11',
      label: 'Duration Weeks',
    },
    {
      id: '12',
      label: 'Actions',
    },
  ];

  constructor(
    private dashboardState: DashboardStateService,
    private managementTourService: ManagementTourService,
    private toast: ToastService,
  ) {}
  ngOnInit(): void {
    if (this.dashboardState.state().tours !== null) {
      this.tours = this.dashboardState.state().tours?.data;
      return;
    }
    this.isLoading = true;
    this.getAllTour().subscribe({
      next: (data) => {
        this.isLoading = false;
        this.tours = data;
        this.dashboardState.updateState({ tours: data });
      },
      error: (err) => {
        this.isLoading = false;
        this.toast.error('Error', err);
      },
    });
  }

  getAllTour(): Observable<Tour[]> {
    return this.managementTourService.getAllTours().pipe(
      map((res: any) => res.data),
      takeUntil(this.destroy$),
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
