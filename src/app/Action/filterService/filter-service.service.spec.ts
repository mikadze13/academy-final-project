import { TestBed } from '@angular/core/testing';

import { FilterServiceService } from './filter-service.service';

describe('FilterServiceService', () => {
  let service: FilterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
