import { TestBed } from '@angular/core/testing';

import { AlertDialogBySweetAlertService } from './alert-dialog-by-sweet-alert.service';

describe('AlertDialogBySweetAlertService', () => {
  let service: AlertDialogBySweetAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertDialogBySweetAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
