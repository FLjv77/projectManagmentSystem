import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovalMarginalizationComponent } from './removal-marginalization.component';

describe('RemovalMarginalizationComponent', () => {
  let component: RemovalMarginalizationComponent;
  let fixture: ComponentFixture<RemovalMarginalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovalMarginalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovalMarginalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
