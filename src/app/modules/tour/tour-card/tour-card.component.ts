import { Component, Input, OnInit } from '@angular/core';
import { Tour } from '@app/shared/modal/tour';

@Component({
  selector: 'tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit {
  @Input() tour!: Tour;

  constructor() { }

  ngOnInit(): void {
  }

}
