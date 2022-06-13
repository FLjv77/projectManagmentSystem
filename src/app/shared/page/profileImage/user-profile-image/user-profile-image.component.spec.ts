import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileImageComponent } from './user-profile-image.component';

describe('UserProfileImageComponent', () => {
  let component: UserProfileImageComponent;
  let fixture: ComponentFixture<UserProfileImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
