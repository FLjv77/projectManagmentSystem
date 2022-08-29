import { TestBed } from '@angular/core/testing';

import { CompanyListService } from './company-list.service';

describe('CompanyListService', () => {
  let service: CompanyListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
