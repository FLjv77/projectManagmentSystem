import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectInformationComponent } from './edit-project-information.component';

describe('EditProjectInformationComponent', () => {
  let component: EditProjectInformationComponent;
  let fixture: ComponentFixture<EditProjectInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProjectInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProjectInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
