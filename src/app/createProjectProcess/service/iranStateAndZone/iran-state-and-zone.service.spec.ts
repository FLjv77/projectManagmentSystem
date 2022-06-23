import { TestBed } from '@angular/core/testing';

import { IranStateAndZoneService } from './iran-state-and-zone.service';

describe('IranStateAndZoneService', () => {
  let service: IranStateAndZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IranStateAndZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
