import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralWayComponent } from './rural-way.component';

describe('RuralWayComponent', () => {
  let component: RuralWayComponent;
  let fixture: ComponentFixture<RuralWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuralWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuralWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
