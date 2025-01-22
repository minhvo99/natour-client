import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() value!: string | number;
  @HostBinding('class') hostClass = 'lg:col-6 xl:col-3';
}
