import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferLineComponent } from './transfer-line.component';

describe('TransferLineComponent', () => {
  let component: TransferLineComponent;
  let fixture: ComponentFixture<TransferLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
