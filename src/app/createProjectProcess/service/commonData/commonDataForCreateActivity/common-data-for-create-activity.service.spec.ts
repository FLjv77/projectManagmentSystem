import { TestBed } from '@angular/core/testing';

import { CommonDataForCreateActivityService } from './common-data-for-create-activity.service';

describe('CommonDataForCreateActivityService', () => {
  let service: CommonDataForCreateActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonDataForCreateActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
