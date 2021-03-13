import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResposableComponent } from './resposable.component';

describe('ResposableComponent', () => {
  let component: ResposableComponent;
  let fixture: ComponentFixture<ResposableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResposableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResposableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
