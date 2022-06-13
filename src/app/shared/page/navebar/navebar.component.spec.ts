import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavebarComponent } from './navebar.component';

describe('NavebarComponent', () => {
  let component: NavebarComponent;
  let fixture: ComponentFixture<NavebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
