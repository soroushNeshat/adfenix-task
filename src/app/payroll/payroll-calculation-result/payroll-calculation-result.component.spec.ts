import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyUnitPipe } from 'src/app/shared/currency-unit.pipe';
import { PayrollCalculationResultComponent } from './payroll-calculation-result.component';

describe('PayrollCalculationResultComponent', () => {
  let component: PayrollCalculationResultComponent;
  let fixture: ComponentFixture<PayrollCalculationResultComponent>;
  let nativeElement: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PayrollCalculationResultComponent,
        CurrencyUnitPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollCalculationResultComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('should display correct currency and 1 fraction digit at max', () => {
    component.result = {
      basicSalary: 0,
      bonusSalary: 20,
      grossSalary: 8.5444,
      basicTax: 9009.111,
      highIncomeTax: 0.1111,
      totalTax: 34.1914,
      netSalary: 93.1401,
      currencyUnit: 'EUR'
    };
    fixture.detectChanges();
    const texts: string[] = [];
    nativeElement.querySelectorAll('.info > span:nth-child(2)').forEach(span => texts.push(span.textContent));
    expect(texts).toEqual([
      '0 EUR',
      '20 EUR',
      '8.5 EUR',
      '9,009.1 EUR',
      '0.1 EUR',
      '34.2 EUR',
      '93.1 EUR'
    ]);
  });
});
