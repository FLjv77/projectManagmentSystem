import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTransformationInformationComponent } from './social-transformation-information.component';

describe('SocialTransformationInformationComponent', () => {
  let component: SocialTransformationInformationComponent;
  let fixture: ComponentFixture<SocialTransformationInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialTransformationInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialTransformationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
