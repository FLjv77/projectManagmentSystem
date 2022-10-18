import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUserUserNameComponent } from './current-user-user-name.component';

describe('CurrentUserUserNameComponent', () => {
  let component: CurrentUserUserNameComponent;
  let fixture: ComponentFixture<CurrentUserUserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentUserUserNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUserUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
