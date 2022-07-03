import { TestBed } from '@angular/core/testing';

import { HandleModalService } from './handle-modal.service';

describe('HandleModalService', () => {
  let service: HandleModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
