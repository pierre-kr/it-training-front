import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeFormulaireComponent } from './theme-formulaire.component';

describe('ThemeFormulaireComponent', () => {
  let component: ThemeFormulaireComponent;
  let fixture: ComponentFixture<ThemeFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
