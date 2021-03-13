import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableFormulaireComponent } from './responsable-formulaire.component';

describe('ResponsableFormulaireComponent', () => {
  let component: ResponsableFormulaireComponent;
  let fixture: ComponentFixture<ResponsableFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsableFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
