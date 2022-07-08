import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCompanyListComponent } from './selected-company-list.component';

describe('SelectedCompanyListComponent', () => {
  let component: SelectedCompanyListComponent;
  let fixture: ComponentFixture<SelectedCompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedCompanyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
