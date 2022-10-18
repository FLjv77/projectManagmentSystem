import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBasicInformationComponent } from './edit-basic-information.component';

describe('EditBasicInformationComponent', () => {
  let component: EditBasicInformationComponent;
  let fixture: ComponentFixture<EditBasicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBasicInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBasicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
