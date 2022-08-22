import { AppConfig } from 'src/app/app.config';
import { calculateResultAction } from './payroll.actions';
import { payrollReducers } from './payroll.reducers';
import { PayrollState } from './payroll.state';

describe('PayrollCalculationResultComponent', () => {
  const initialState: PayrollState = { formMetadata: null, calculationResult: null };

  it('should calculate result correctly', () => {
    const appConfig: AppConfig = {
      basicProfessionSalaries: {
        Driver: 9234
      },
      salaryIncreaseRates: [
        { from: 0, to: 3, increaseRate: 21 },
        { from: 4, to: 5, increaseRate: 32.4 },
        { from: 6, increaseRate: 80.13 }
      ],
      basicTaxRates: {
        Sanandaj: {
          2011: 41.2
        }
      },
      extraHighIncomeTaxRates: [
        { from: 9998, to: 11322, taxRate: 40.1 },
        { from: 11323, to: 14317, taxRate: 51.52 },
        { from: 14318, to: 15121, taxRate: 60 },
        { from: 15122, taxRate: 61.9 }
      ],
      currencyUnit: 'RIAL'
    };
    const result = payrollReducers(initialState, calculateResultAction({
      formData: {
        yearsOfExperience: 6,
        profession: 'Driver',
        city: 'Sanandaj',
        year: '2011'
      },
      appConfig
    })).calculationResult;
    expect(result.basicSalary).toBe(9234);
    expect(result.bonusSalary).toBe(7399.204199999999);
    expect(result.grossSalary).toBe(16633.2042);
    expect(result.basicTax).toBe(-6852.880130400001);
    expect(result.highIncomeTax).toBe(-3490.6681998000004);
    expect(result.totalTax).toBe(-10343.548330200001);
    expect(result.netSalary).toBe(6289.655869799999);
    expect(result.currencyUnit).toBe('RIAL');
    expect(initialState.formMetadata).toBe(null);
    expect(initialState.calculationResult).toBe(null);
  });
});
