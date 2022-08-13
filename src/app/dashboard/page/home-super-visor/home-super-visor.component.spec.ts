import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSuperVisorComponent } from './home-super-visor.component';

describe('HomeSuperVisorComponent', () => {
  let component: HomeSuperVisorComponent;
  let fixture: ComponentFixture<HomeSuperVisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSuperVisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSuperVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
