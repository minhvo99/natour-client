import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tour } from '@app/shared/modal/tour';

@Component({
  selector: 'tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit {
  @Input() tour!: Tour;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onNavigateToTourDetail(tourId: string) {
    this.route.navigateByUrl(`/tour/${tourId}`);
  }

}
