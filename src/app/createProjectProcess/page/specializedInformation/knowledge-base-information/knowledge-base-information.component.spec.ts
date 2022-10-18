import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBaseInformationComponent } from './knowledge-base-information.component';

describe('KnowledgeBaseInformationComponent', () => {
  let component: KnowledgeBaseInformationComponent;
  let fixture: ComponentFixture<KnowledgeBaseInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeBaseInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeBaseInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
