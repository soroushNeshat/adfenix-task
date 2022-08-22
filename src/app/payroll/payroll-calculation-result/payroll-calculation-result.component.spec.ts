import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PayrollCalculationResultComponent } from './payroll-calculation-result.component';

describe('PayrollCalculationResultComponent', () => {
  let component: PayrollCalculationResultComponent;
  let fixture: ComponentFixture<PayrollCalculationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PayrollCalculationResultComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollCalculationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
