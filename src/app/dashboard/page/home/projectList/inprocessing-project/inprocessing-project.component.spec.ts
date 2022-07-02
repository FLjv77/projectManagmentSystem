import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprocessingProjectComponent } from './inprocessing-project.component';

describe('InprocessingProjectComponent', () => {
  let component: InprocessingProjectComponent;
  let fixture: ComponentFixture<InprocessingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InprocessingProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InprocessingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
