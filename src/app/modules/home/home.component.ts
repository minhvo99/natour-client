import { Component, OnInit } from '@angular/core';
import { ToastService } from '@app/shared/components/toast/toast-service.service';
import { TOAST_STATE } from '@app/shared/modal/toast';
import { Tour } from '@app/shared/modal/tour';
import { Subject, Observable, takeUntil } from 'rxjs';
import { TourService } from '../tour/services/tour.service';
import { LayoutService } from '../admin/services/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listTour: Tour[] = [];
  $destroy: Subject<void> = new Subject<void>();
  isLoading = false;
  bannerOption!: any[];

  constructor(
    private tourService: TourService,
    private toast: ToastService,
    public layoutService: LayoutService, public router: Router
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
    return this.tourService.getTopTourCheap().pipe(takeUntil(this.$destroy));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.$destroy.next();
    this.$destroy.complete();
  }
}

