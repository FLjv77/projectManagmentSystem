import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeveloperInformationormationComponent } from './edit-developer-informationormation.component';

describe('EditDeveloperInformationormationComponent', () => {
  let component: EditDeveloperInformationormationComponent;
  let fixture: ComponentFixture<EditDeveloperInformationormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeveloperInformationormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeveloperInformationormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
