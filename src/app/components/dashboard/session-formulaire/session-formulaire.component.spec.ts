import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFormulaireComponent } from './session-formulaire.component';

describe('SessionFormulaireComponent', () => {
  let component: SessionFormulaireComponent;
  let fixture: ComponentFixture<SessionFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
