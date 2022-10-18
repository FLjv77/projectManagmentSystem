import { TestBed } from '@angular/core/testing';

import { NumberFormaterService } from './number-formater.service';

describe('NumberFormaterService', () => {
  let service: NumberFormaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberFormaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
