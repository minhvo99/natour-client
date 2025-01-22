import { TestBed } from '@angular/core/testing';

import { ManagementTourService } from './management-tour.service';

describe('ManagementTourService', () => {
  let service: ManagementTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
