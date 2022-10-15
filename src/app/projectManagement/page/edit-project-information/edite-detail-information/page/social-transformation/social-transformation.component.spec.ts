import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialTransformationComponent } from './social-transformation.component';

describe('SocialTransformationComponent', () => {
  let component: SocialTransformationComponent;
  let fixture: ComponentFixture<SocialTransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialTransformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
