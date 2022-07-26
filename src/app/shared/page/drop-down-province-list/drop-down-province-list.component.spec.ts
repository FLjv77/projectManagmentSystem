import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownProvinceListComponent } from './drop-down-province-list.component';

describe('DropDownProvinceListComponent', () => {
  let component: DropDownProvinceListComponent;
  let fixture: ComponentFixture<DropDownProvinceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownProvinceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownProvinceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
