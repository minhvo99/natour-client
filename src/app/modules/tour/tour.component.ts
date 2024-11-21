import { Component, OnInit } from '@angular/core';
import { TourService } from './services/tour.service';
import { Tour } from '@app/shared/modal/tour';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ToastService } from '@app/shared/components/toast/toast-service.service';
import { TOAST_STATE } from '@app/shared/modal/toast';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
})
export class TourComponent implements OnInit {
  listTour: Tour[] = [];
  $destroy: Subject<void> = new Subject<void>();
  isLoading = false;
  bannerOption!: any[];

  constructor(
    private tourService: TourService,
    private toast: ToastService,
  ) {
    this.bannerOption = [
      {
        location: 'Toronto, Canada',
        message: 'Hurry! Get the Best Villa for you',
        image: '../../../assets/images/banner-01.jpg',
      },
      {
        location: 'Melbourne, Australia',
        message: 'Be Quick! Get the best villa in town',
        image: '../../../assets/images/banner-02.jpg',
      },
      {
        location: 'Miami, South Florida',
        message: 'Act Now! Get the highest level penthouse',
        image: '../../../assets/images/banner-03.jpg',
      },
    ];
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getTourCheap().subscribe({
      next: (res) => {
        this.listTour = res;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.toast.error(TOAST_STATE.error, err.message)
      }
    });
  }

  getTourCheap(): Observable<Tour[]> {
    return this.tourService.getAllTours().pipe(takeUntil(this.$destroy));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.$destroy.next();
    this.$destroy.complete();
  }
}
