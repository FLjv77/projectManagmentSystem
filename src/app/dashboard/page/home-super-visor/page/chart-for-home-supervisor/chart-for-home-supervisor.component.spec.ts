import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartForHomeSupervisorComponent } from './chart-for-home-supervisor.component';

describe('ChartForHomeSupervisorComponent', () => {
  let component: ChartForHomeSupervisorComponent;
  let fixture: ComponentFixture<ChartForHomeSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartForHomeSupervisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartForHomeSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
