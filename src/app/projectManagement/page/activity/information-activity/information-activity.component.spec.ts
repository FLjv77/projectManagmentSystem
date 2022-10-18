import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationActivityComponent } from './information-activity.component';

describe('InformationActivityComponent', () => {
  let component: InformationActivityComponent;
  let fixture: ComponentFixture<InformationActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
