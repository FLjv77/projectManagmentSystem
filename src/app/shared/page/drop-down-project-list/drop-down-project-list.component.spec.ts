import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownProjectListComponent } from './drop-down-project-list.component';

describe('DropDownProjectListComponent', () => {
  let component: DropDownProjectListComponent;
  let fixture: ComponentFixture<DropDownProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownProjectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
