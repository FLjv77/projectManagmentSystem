import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownCompanyListComponent } from './drop-down-company-list.component';

describe('DropDownCompanyListComponent', () => {
  let component: DropDownCompanyListComponent;
  let fixture: ComponentFixture<DropDownCompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownCompanyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
