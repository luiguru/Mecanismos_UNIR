import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motor1Component } from './motor1.component';

describe('Motor1Component', () => {
  let component: Motor1Component;
  let fixture: ComponentFixture<Motor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Motor1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Motor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
