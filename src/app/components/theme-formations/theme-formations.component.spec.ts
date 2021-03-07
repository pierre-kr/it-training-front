import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeFormationsComponent } from './theme-formations.component';

describe('ThemeFormationsComponent', () => {
  let component: ThemeFormationsComponent;
  let fixture: ComponentFixture<ThemeFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeFormationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
