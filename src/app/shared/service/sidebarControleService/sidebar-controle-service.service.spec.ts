import { TestBed } from '@angular/core/testing';

import { SidebarControleServiceService } from './sidebar-controle-service.service';

describe('SidebarControleServiceService', () => {
  let service: SidebarControleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarControleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
