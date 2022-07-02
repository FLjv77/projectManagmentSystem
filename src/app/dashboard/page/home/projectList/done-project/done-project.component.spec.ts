import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneProjectComponent } from './done-project.component';

describe('DoneProjectComponent', () => {
  let component: DoneProjectComponent;
  let fixture: ComponentFixture<DoneProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
