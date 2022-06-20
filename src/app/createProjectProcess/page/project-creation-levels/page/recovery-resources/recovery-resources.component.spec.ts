import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryResourcesComponent } from './recovery-resources.component';

describe('RecoveryResourcesComponent', () => {
  let component: RecoveryResourcesComponent;
  let fixture: ComponentFixture<RecoveryResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveryResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
