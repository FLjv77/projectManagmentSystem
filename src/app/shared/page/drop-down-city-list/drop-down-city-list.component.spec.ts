import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownCityListComponent } from './drop-down-city-list.component';

describe('DropDownCityListComponent', () => {
  let component: DropDownCityListComponent;
  let fixture: ComponentFixture<DropDownCityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownCityListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownCityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
