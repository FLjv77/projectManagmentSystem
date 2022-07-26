import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PProjectLocationInformationComponent } from './pproject-location-information.component';

describe('PProjectLocationInformationComponent', () => {
  let component: PProjectLocationInformationComponent;
  let fixture: ComponentFixture<PProjectLocationInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PProjectLocationInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PProjectLocationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
