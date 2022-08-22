import { browser, by, ElementFinder, ExpectedConditions } from 'protractor';
import { SelectorScope } from '../shared/selector.scope';
import { UnisgnedIntegerInputScope } from '../shared/unisgned-integer-input.scope';

export class PayrollFormScope {
  private readonly _submitButton: ElementFinder;
  readonly yearsOfExperienceInput: UnisgnedIntegerInputScope;
  readonly professionInput: SelectorScope;
  readonly cityInput: SelectorScope;
  readonly yearInput: SelectorScope;

  constructor(private readonly _root: ElementFinder) {
    this._submitButton = this._root.element(by.css('button[type=submit]'));
    this.yearsOfExperienceInput = new UnisgnedIntegerInputScope(this._root.element(by.css('app-unsigned-integer-input[name=yearsOfExperience]')));
    this.professionInput = new SelectorScope(this._root.element(by.css('nb-select[name=profession]')));
    this.cityInput = new SelectorScope(this._root.element(by.css('nb-select[name=city]')));
    this.yearInput = new SelectorScope(this._root.element(by.css('nb-select[name=year]')));
  }

  async submitIsDisabled(): Promise<boolean> {
    await browser.wait(ExpectedConditions.visibilityOf(this._submitButton));
    return await this._submitButton.getAttribute('disabled') !== null;
  }

  async submit(): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(this._submitButton));
    await this._submitButton.click();
  }
}
