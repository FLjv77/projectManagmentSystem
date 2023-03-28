import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownUserListComponent } from './drop-down-user-list.component';

describe('DropDownUserListComponent', () => {
  let component: DropDownUserListComponent;
  let fixture: ComponentFixture<DropDownUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
