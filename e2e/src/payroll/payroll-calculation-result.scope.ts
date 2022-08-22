import { browser, by, ElementFinder, ExpectedConditions } from 'protractor';

export class PayrollCalculationResultScope {
  constructor(private readonly _root: ElementFinder) { }

  async readTitleOfAllRows(): Promise<string[]> {
    await browser.wait(ExpectedConditions.visibilityOf(this._root));
    return await this._root.all(by.css(`.info > span:first-child`)).map(title => title.getText());
  }

  async readValueOfAllRows(): Promise<string[]> {
    await browser.wait(ExpectedConditions.visibilityOf(this._root));
    return await this._root.all(by.css(`.info > span:nth-child(2)`)).map(title => title.getText());
  }

  async readStatusOfAllRows(): Promise<string[]> {
    await browser.wait(ExpectedConditions.visibilityOf(this._root));
    return await this._root.all(by.css(`.info > span:nth-child(2)`)).map(title => title.getAttribute('class'));
  }
}
