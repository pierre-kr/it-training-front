import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantInformationsFormationComponent } from './important-informations-formation.component';

describe('ImportantInformationsFormationComponent', () => {
  let component: ImportantInformationsFormationComponent;
  let fixture: ComponentFixture<ImportantInformationsFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantInformationsFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantInformationsFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
