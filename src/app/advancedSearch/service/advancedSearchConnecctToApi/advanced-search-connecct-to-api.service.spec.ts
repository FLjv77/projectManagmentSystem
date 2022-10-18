import { TestBed } from '@angular/core/testing';

import { AdvancedSearchConnecctToApiService } from './advanced-search-connecct-to-api.service';

describe('AdvancedSearchConnecctToApiService', () => {
  let service: AdvancedSearchConnecctToApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvancedSearchConnecctToApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
