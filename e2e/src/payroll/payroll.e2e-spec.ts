import { PayrollPage } from './payroll.page';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: PayrollPage;

  beforeEach(async () => {
    page = new PayrollPage();
    await browser.waitForAngularEnabled(false);
    await page.navigateTo();
    await browser.navigate().refresh();
  });

  it('should display correct options for profession input', async () => {
    const professionInput = page.form.professionInput;
    await professionInput.open();
    expect(await professionInput.getOptions()).toEqual(['Developer', 'Teacher', 'Cashier']);
  });

  it('should display correct options for city input', async () => {
    const cityInput = page.form.cityInput;
    await cityInput.open();
    expect(await cityInput.getOptions()).toEqual(['Stockholm', 'Gothenburg']);
  });

  it('should display correct options for year input', async () => {
    const yearInput = page.form.yearInput;
    await yearInput.open();
    expect(await yearInput.getOptions()).toEqual(['2019', '2020']);
  });

  it('should disable/enable submit button accroding to the validation status of the form', async () => {
    const form = page.form;
    expect(await form.submitIsDisabled()).toBe(true);
    await form.yearsOfExperienceInput.write(8);
    expect(await form.submitIsDisabled()).toBe(true);
    await form.professionInput.open();
    await form.professionInput.select('Teacher');
    expect(await form.submitIsDisabled()).toBe(true);
    await form.cityInput.open();
    await form.cityInput.select('Stockholm');
    expect(await form.submitIsDisabled()).toBe(true);
    await form.yearInput.open();
    await form.yearInput.select('2019');
    expect(await form.submitIsDisabled()).toBe(false);
  });

  it('should diaplay correct titles and colors in calculation result for yearsOfExperience: 5, profession: Developer, city: Stockholm, year: 2019', async () => {
    const form = page.form;
    await form.yearsOfExperienceInput.write(5);
    await form.professionInput.open();
    await form.professionInput.select('Developer');
    await form.cityInput.open();
    await form.cityInput.select('Stockholm');
    await form.yearInput.open();
    await form.yearInput.select('2019');
    await form.submit();
    const calculationResult = page.calculationResult;
    expect(await calculationResult.readTitleOfAllRows()).toEqual([
      'Basic Salary',
      'Bonus Salary',
      'Gross Salary',
      'Basic Tax',
      'High Income Tax',
      'Total Tax',
      'Net Salary'
    ]);
    expect(await calculationResult.readStatusOfAllRows()).toEqual([
      'plus',
      'plus',
      'plus',
      'minus',
      'minus',
      'minus',
      ''
    ]);
  });

  it('should diaplay correct values in calculation result for yearsOfExperience: 5, profession: Developer, city: Stockholm, year: 2019', async () => {
    const form = page.form;
    await form.yearsOfExperienceInput.write(5);
    await form.professionInput.open();
    await form.professionInput.select('Developer');
    await form.cityInput.open();
    await form.cityInput.select('Stockholm');
    await form.yearInput.open();
    await form.yearInput.select('2019');
    await form.submit();
    const calculationResult = page.calculationResult;
    expect(await calculationResult.readValueOfAllRows()).toEqual([
      '30,000 kr',
      '6,000 kr',
      '36,000 kr',
      '-10,800 kr',
      '0 kr',
      '-10,800 kr',
      '25,200 kr'
    ]);
  });

  it('should diaplay correct values in calculation result for yearsOfExperience: 11, profession: Cashier, city: Gothenburg, year: 2020 and recalculate for year: 2019', async () => {
    const form = page.form;
    await form.yearsOfExperienceInput.write(11);
    await form.professionInput.open();
    await form.professionInput.select('Cashier');
    await form.cityInput.open();
    await form.cityInput.select('Gothenburg');
    await form.yearInput.open();
    await form.yearInput.select('2020');
    await form.submit();
    const calculationResult = page.calculationResult;
    expect(await calculationResult.readValueOfAllRows()).toEqual([
      '25,000 kr',
      '15,000 kr',
      '40,000 kr',
      '-8,800 kr',
      '-2,000 kr',
      '-10,800 kr',
      '29,200 kr'
    ]);
    await form.yearInput.open();
    await form.yearInput.select('2019');
    await form.submit();
    expect(await calculationResult.readValueOfAllRows()).toEqual([
      '25,000 kr',
      '15,000 kr',
      '40,000 kr',
      '-10,000 kr',
      '-2,000 kr',
      '-12,000 kr',
      '28,000 kr'
    ]);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
