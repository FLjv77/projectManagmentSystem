import { TestBed } from '@angular/core/testing';

import { HandleDisplayErrorService } from './handle-display-error.service';

describe('HandleDisplayErrorService', () => {
  let service: HandleDisplayErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleDisplayErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
