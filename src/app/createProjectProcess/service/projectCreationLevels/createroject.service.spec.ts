import { TestBed } from '@angular/core/testing';

import { CreaterojectService } from './createroject.service';

describe('CreaterojectService', () => {
  let service: CreaterojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaterojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
