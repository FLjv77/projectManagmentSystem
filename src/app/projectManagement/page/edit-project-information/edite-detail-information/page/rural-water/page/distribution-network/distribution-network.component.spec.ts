import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionNetworkComponent } from './distribution-network.component';

describe('DistributionNetworkComponent', () => {
  let component: DistributionNetworkComponent;
  let fixture: ComponentFixture<DistributionNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributionNetworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
