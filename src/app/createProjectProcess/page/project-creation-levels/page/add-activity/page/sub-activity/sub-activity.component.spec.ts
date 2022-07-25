import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubActivityComponent } from './sub-activity.component';

describe('SubActivityComponent', () => {
  let component: SubActivityComponent;
  let fixture: ComponentFixture<SubActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
