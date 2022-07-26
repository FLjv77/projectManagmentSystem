import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownContributorsComponent } from './drop-down-contributors.component';

describe('DropDownContributorsComponent', () => {
  let component: DropDownContributorsComponent;
  let fixture: ComponentFixture<DropDownContributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownContributorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
