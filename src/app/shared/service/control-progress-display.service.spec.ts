import { TestBed } from '@angular/core/testing';

import { ControlProgressDisplayService } from './control-progress-display.service';

describe('ControlProgressDisplayService', () => {
  let service: ControlProgressDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlProgressDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
