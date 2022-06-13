import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUserProfileImageComponent } from './current-user-profile-image.component';

describe('CurrentUserProfileImageComponent', () => {
  let component: CurrentUserProfileImageComponent;
  let fixture: ComponentFixture<CurrentUserProfileImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentUserProfileImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUserProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
