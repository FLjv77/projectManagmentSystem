import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreviewedReportsComponent } from './unreviewed-reports.component';

describe('UnreviewedReportsComponent', () => {
  let component: UnreviewedReportsComponent;
  let fixture: ComponentFixture<UnreviewedReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnreviewedReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnreviewedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
