import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeDetailInformationComponent } from './edite-detail-information.component';

describe('EditeDetailInformationComponent', () => {
  let component: EditeDetailInformationComponent;
  let fixture: ComponentFixture<EditeDetailInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeDetailInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeDetailInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
