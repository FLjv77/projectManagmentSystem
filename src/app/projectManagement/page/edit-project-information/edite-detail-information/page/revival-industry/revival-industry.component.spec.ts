import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevivalIndustryComponent } from './revival-industry.component';

describe('RevivalIndustryComponent', () => {
  let component: RevivalIndustryComponent;
  let fixture: ComponentFixture<RevivalIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevivalIndustryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevivalIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
