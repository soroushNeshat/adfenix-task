import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollResultComponent } from './payroll-result.component';

describe('PayrollResultComponent', () => {
  let component: PayrollResultComponent;
  let fixture: ComponentFixture<PayrollResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
