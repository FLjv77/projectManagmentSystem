import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInformationComponent } from './health-information.component';

describe('HealthInformationComponent', () => {
  let component: HealthInformationComponent;
  let fixture: ComponentFixture<HealthInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
