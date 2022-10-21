import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownRegionListComponent } from './drop-down-region-list.component';

describe('DropDownRegionListComponent', () => {
  let component: DropDownRegionListComponent;
  let fixture: ComponentFixture<DropDownRegionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownRegionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownRegionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
