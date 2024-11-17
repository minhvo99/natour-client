import { Component, OnInit } from '@angular/core';
import { TourService } from './services/tour.service';
import { Tour } from '@app/shared/modal/tour';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ToastService } from '@app/shared/components/toast/toast-service.service';
import { TOAST_STATE } from '@app/shared/modal/toast';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  listTour: Tour[] = [];
  $destroy: Subject<void> = new Subject<void>();
  isLoading = false;

  constructor(private tourService: TourService, private toast: ToastService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getTourCheap().subscribe((res) => {
      this.listTour = res;
      this.isLoading = false;
    });
  }

  getTourCheap () :Observable<Tour[]> {
    return this.tourService.getTopTourCheap().pipe(
      takeUntil(this.$destroy)
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.$destroy.next();
    this.$destroy.complete();
  }

}
