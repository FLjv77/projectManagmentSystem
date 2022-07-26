import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownVillageListComponent } from './drop-down-village-list.component';

describe('DropDownVillageListComponent', () => {
  let component: DropDownVillageListComponent;
  let fixture: ComponentFixture<DropDownVillageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownVillageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownVillageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
