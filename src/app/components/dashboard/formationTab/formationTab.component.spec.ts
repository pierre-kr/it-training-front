import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationTabComponent } from './formationTab.component';

describe('FormationTabComponent', () => {
  let component: FormationTabComponent;
  let fixture: ComponentFixture<FormationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
