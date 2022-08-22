import { browser, by, element, ElementFinder } from 'protractor';

export class SelectorScope {
  private readonly _optionsContainer: ElementFinder;

  constructor(private readonly _root: ElementFinder) {
    this._optionsContainer = element(by.css('nb-option-list'));
  }

  async open(): Promise<void> {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this._root));
    await this._root.click();
  }

  async getOptions(): Promise<string[]> {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this._optionsContainer));
    const options = this._optionsContainer.all(by.css('nb-option'));
    return await options.map<string>(option => option.getText());
  }

  async select(text: string): Promise<void> {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this._optionsContainer));
    await this._optionsContainer.element(by.cssContainingText('nb-option', text)).click();
  }
}
