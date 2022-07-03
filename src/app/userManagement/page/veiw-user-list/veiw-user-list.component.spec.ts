import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwUserListComponent } from './veiw-user-list.component';

describe('VeiwUserListComponent', () => {
  let component: VeiwUserListComponent;
  let fixture: ComponentFixture<VeiwUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
