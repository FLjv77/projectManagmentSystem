import { TestBed } from '@angular/core/testing';

import { SpecializedInformationService } from './specialized-information.service';

describe('SpecializedInformationService', () => {
  let service: SpecializedInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecializedInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
