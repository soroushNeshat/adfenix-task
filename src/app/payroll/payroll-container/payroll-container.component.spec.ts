import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollContainerComponent } from './payroll-container.component';

describe('PayrollContainerComponent', () => {
  let component: PayrollContainerComponent;
  let fixture: ComponentFixture<PayrollContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
