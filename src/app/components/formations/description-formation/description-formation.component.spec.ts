import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionFormationComponent } from './description-formation.component';

describe('DescriptionFormationComponent', () => {
  let component: DescriptionFormationComponent;
  let fixture: ComponentFixture<DescriptionFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
