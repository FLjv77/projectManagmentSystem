import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNewImageForGalleryComponent } from './upload-new-image-for-gallery.component';

describe('UploadNewImageForGalleryComponent', () => {
  let component: UploadNewImageForGalleryComponent;
  let fixture: ComponentFixture<UploadNewImageForGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadNewImageForGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadNewImageForGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
