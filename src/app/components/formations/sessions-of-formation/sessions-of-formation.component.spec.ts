import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsOfFormationComponent } from './sessions-of-formation.component';

describe('SessionsOfFormationComponent', () => {
  let component: SessionsOfFormationComponent;
  let fixture: ComponentFixture<SessionsOfFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsOfFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsOfFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
