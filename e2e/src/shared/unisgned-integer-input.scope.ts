import { browser, by, ElementFinder } from 'protractor';

export class UnisgnedIntegerInputScope {
  private readonly _input: ElementFinder;

  constructor(private readonly _root: ElementFinder) {
    this._input = this._root.element(by.css('input'));
  }

  async write(number: number): Promise<void> {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this._input));
    await this._input.sendKeys(number.toString());
  }
}
