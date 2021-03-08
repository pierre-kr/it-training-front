import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationSessionComponent } from './evaluation-session.component';

describe('EvaluationSessionComponent', () => {
  let component: EvaluationSessionComponent;
  let fixture: ComponentFixture<EvaluationSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
