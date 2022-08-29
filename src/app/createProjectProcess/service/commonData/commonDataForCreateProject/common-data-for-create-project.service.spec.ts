import { TestBed } from '@angular/core/testing';

import { CommonDataForCreateProjectService } from './common-data-for-create-project.service';

describe('CommonDataForCreateProjectService', () => {
  let service: CommonDataForCreateProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonDataForCreateProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
