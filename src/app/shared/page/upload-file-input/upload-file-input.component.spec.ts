import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileInputComponent } from './upload-file-input.component';

describe('UploadFileInputComponent', () => {
  let component: UploadFileInputComponent;
  let fixture: ComponentFixture<UploadFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
