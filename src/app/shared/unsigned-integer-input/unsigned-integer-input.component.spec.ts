import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsignedIntegerInputComponent } from './unsigned-integer-input.component';

describe('UnsignedIntegerInputComponent', () => {
  let component: UnsignedIntegerInputComponent;
  let fixture: ComponentFixture<UnsignedIntegerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsignedIntegerInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsignedIntegerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
