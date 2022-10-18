import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeActivityInformationComponent } from './edite-activity-information.component';

describe('EditeActivityInformationComponent', () => {
  let component: EditeActivityInformationComponent;
  let fixture: ComponentFixture<EditeActivityInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeActivityInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeActivityInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
