import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevivalOfIndustryInformationComponent } from './revival-of-industry-information.component';

describe('RevivalOfIndustryInformationComponent', () => {
  let component: RevivalOfIndustryInformationComponent;
  let fixture: ComponentFixture<RevivalOfIndustryInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevivalOfIndustryInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevivalOfIndustryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
