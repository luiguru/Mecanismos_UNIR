import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motor2Component } from './motor2.component';

describe('Motor2Component', () => {
  let component: Motor2Component;
  let fixture: ComponentFixture<Motor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Motor2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Motor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
