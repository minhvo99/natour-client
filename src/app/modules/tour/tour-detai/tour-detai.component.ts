import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourService } from '../services/tour.service';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { ToastService } from '@app/shared/components/toast/toast-service.service';
import { TOAST_STATE } from '@app/shared/modal/toast';
import { Tour } from '@app/shared/modal/tour';
import { AuthService } from '@app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tour-detai',
  templateUrl: './tour-detai.component.html',
  styleUrls: ['./tour-detai.component.scss'],
})
export class TourDetaiComponent implements OnInit {
  $destroy: Subject<void> = new Subject<void>();
  tour: Tour = {} as Tour;
  isLoading = false;
  isLogined = false;
  reviewForm!: FormGroup;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private tourService: TourService,
    private toast: ToastService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.reviewForm = this.formBuilder.group({
      review: ['', Validators.required],
      rating: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.isLoading = true;
    this.authService.user.pipe(takeUntil(this.$destroy)).subscribe({
      next: (user) => {
        this.isLogined = user && user.token;
      },
      error: (err) => {
        this.toast.error(TOAST_STATE.error, err);
      },
    });
    this.getTourById(id)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data) => {
          this.isLoading = false;
          this.tour = { ...data };
        },
        error: (err) => {
          this.isLoading = false;
          this.toast.error(TOAST_STATE.error, err);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  selectStar(value: any): void {
    if (this.selectedRating) {
      this.stars.filter((star) => {
        if (star.id <= value) {
          star.class = 'star-gold star';
        } else {
          star.class = 'star-gray star';
        }
      });
    }

    this.selectedRating = value;
  }

  getStars(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? 'star' : 'star_border');
    }
    return stars;
  }

  get selectedRating() {
    return this.reviewForm.get('rating')?.value;
  }

  set selectedRating(value: number) {
    this.reviewForm.get('rating')?.setValue(value);
  }

  getTourById(id: string) {
    return this.tourService.getTourbyId(id);
  }

  getAvatar(user: any) {
    const firstChar = user?.name?.charAt(0).toUpperCase() || 'U';
    const avatarUrl = user?.photo ? user?.photo : null;
    return { firstChar, avatarUrl };
  }

  onSubmitReview() {
    const { review, rating } = this.reviewForm.value;
    this.stars.forEach((star) => {
      star.class = 'star-gray star';
    });
    const tourId = this.tour.id;
    this.tourService
      .reviewTour(tourId, { review, rating })
      .pipe(
        switchMap(() => this.getTourById(tourId)),
        takeUntil(this.$destroy),
      )
      .subscribe({
        next: (tour) => {
          this.tour = { ...tour };
        },
        error: (err) => {
          this.toast.error(TOAST_STATE.error, err);
        },
        complete: () => {
          this.reviewForm.reset();
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
