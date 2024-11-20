import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourService } from '../services/tour.service';
import { Subject, takeUntil } from 'rxjs';
import { ToastService } from '@app/shared/components/toast/toast-service.service';
import { TOAST_STATE } from '@app/shared/modal/toast';
import { Tour } from '@app/shared/modal/tour';

@Component({
  selector: 'app-tour-detai',
  templateUrl: './tour-detai.component.html',
  styleUrls: ['./tour-detai.component.scss'],
})
export class TourDetaiComponent implements OnInit {
  $destroy: Subject<void> = new Subject<void>();
  tour : Tour = {} as Tour;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private tourService: TourService,
    private toast: ToastService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.isLoading = true;
    this.tourService
      .getTourbyId(id)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data) => {
          this.isLoading = false;
          this.tour = {...data};
          console.log(data);
        },
        error: (err) => {
          this.isLoading = false;
          this.toast.error(TOAST_STATE.error, err);
        },
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.$destroy.next();
    this.$destroy.complete();
  }
}
