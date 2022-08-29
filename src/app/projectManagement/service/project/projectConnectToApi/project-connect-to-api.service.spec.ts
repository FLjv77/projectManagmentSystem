import { TestBed } from '@angular/core/testing';

import { ProjectConnectToApiService } from './project-connect-to-api.service';

describe('ProjectConnectToApiService', () => {
  let service: ProjectConnectToApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectConnectToApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
