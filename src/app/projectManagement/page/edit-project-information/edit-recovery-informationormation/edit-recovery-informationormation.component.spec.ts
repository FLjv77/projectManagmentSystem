import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecoveryInformationormationComponent } from './edit-recovery-informationormation.component';

describe('EditRecoveryInformationormationComponent', () => {
  let component: EditRecoveryInformationormationComponent;
  let fixture: ComponentFixture<EditRecoveryInformationormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecoveryInformationormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRecoveryInformationormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
