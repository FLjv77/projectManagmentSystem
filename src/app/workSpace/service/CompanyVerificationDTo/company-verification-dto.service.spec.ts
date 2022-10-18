import { TestBed } from '@angular/core/testing';

import { CompanyVerificationDToService } from './company-verification-dto.service';

describe('CompanyVerificationDToService', () => {
  let service: CompanyVerificationDToService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyVerificationDToService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
