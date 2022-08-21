import { InjectionToken } from '@angular/core';

type BasicTaxRates = Readonly<
    Record<
        string, // city
        Readonly<
            Record<
                string, // year
                number  // tax rate
            >
        >
    >
>;

type ExtraHighIncomeTaxRats = ReadonlyArray<
    Readonly<{
        from: number;
        to?: number;
        taxRate: number;
    }>
>;

type BasicProfessionSalaries = Record<string, number>;

type SalaryIncreaseRates = ReadonlyArray<
    Readonly<{
        from: number;
        to?: number;
        increaseRate: number;
    }>
>;

export type AppConfig = Readonly<{
    basicProfessionSalaries: BasicProfessionSalaries;
    basicTaxRates: BasicTaxRates;
    extraHighIncomeTaxRates: ExtraHighIncomeTaxRats;
    salaryIncreaseRates: SalaryIncreaseRates;
    currencyUnit: string;
}>;

export const APP_CONFIG = new InjectionToken<AppConfig>('AppConfig');

export const AppConfigValue: AppConfig = {
    basicProfessionSalaries: {
        Developer: 30001,
        Teacher: 27000,
        Cashier: 25000
    },
    basicTaxRates: {
        Stockholm: {
            2019: 30,
            2020: 29
        },
        Gothenburg: {
            2019: 25,
            2020: 22
        }
    },
    extraHighIncomeTaxRates: [
        { from: 36000, to: 45000, taxRate: 50 },
        { from: 45001, taxRate: 70 }
    ],
    salaryIncreaseRates: [
        { from: 0, to: 3, increaseRate: 0 },
        { from: 4, to: 7, increaseRate: 20 },
        { from: 8, to: 10, increaseRate: 40 },
        { from: 11, increaseRate: 60 }
    ],
    currencyUnit: 'kr'
};
