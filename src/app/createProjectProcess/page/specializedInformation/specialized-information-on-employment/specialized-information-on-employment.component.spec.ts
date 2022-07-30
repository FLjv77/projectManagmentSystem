import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedInformationOnEmploymentComponent } from './specialized-information-on-employment.component';

describe('SpecializedInformationOnEmploymentComponent', () => {
  let component: SpecializedInformationOnEmploymentComponent;
  let fixture: ComponentFixture<SpecializedInformationOnEmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializedInformationOnEmploymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializedInformationOnEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
