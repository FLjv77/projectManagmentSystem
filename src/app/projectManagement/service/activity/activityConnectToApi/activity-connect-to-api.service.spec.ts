import { TestBed } from '@angular/core/testing';

import { ActivityConnectToApiService } from './activity-connect-to-api.service';

describe('ActivityConnectToApiService', () => {
  let service: ActivityConnectToApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityConnectToApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
