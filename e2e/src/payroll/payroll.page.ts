import { browser, by, element, ElementFinder } from 'protractor';
import { PayrollCalculationResultScope } from './payroll-calculation-result.scope';
import { PayrollFormScope } from './payroll-form.scope';

export class PayrollPage {
  private readonly _root: ElementFinder;
  readonly form: PayrollFormScope;
  readonly calculationResult: PayrollCalculationResultScope;

  constructor() {
    this._root = element(by.css('app-payroll-container'));
    this.form = new PayrollFormScope(this._root.element(by.css('app-payroll-form')));
    this.calculationResult = new PayrollCalculationResultScope(this._root.element(by.css('app-payroll-calculation-result')));
  }

  async navigateTo(): Promise<void> {
    await browser.get('');
  }
}
