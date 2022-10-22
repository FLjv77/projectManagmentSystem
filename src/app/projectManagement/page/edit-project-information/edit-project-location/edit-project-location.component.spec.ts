import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectLocationComponent } from './edit-project-location.component';

describe('EditProjectLocationComponent', () => {
  let component: EditProjectLocationComponent;
  let fixture: ComponentFixture<EditProjectLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProjectLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
