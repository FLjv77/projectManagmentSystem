import { TestBed } from '@angular/core/testing';

import { ReportConnectionToApiService } from './report-connection-to-api.service';

describe('ReportConnectionToApiService', () => {
  let service: ReportConnectionToApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportConnectionToApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
