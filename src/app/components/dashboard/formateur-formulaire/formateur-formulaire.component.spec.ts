import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurFormulaireComponent } from './formateur-formulaire.component';

describe('FormateurFormulaireComponent', () => {
  let component: FormateurFormulaireComponent;
  let fixture: ComponentFixture<FormateurFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
