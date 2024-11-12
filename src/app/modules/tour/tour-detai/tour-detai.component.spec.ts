import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetaiComponent } from './tour-detai.component';

describe('TourDetaiComponent', () => {
  let component: TourDetaiComponent;
  let fixture: ComponentFixture<TourDetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
