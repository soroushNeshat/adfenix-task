import { InjectionToken } from '@angular/core';

type cities = "stockholm" | "gothenburg";

type years = '2019' | '2020';

type professions = 'Developer' | 'Teacher' | 'Cashier';

type BasicTaxRates = Readonly<
    Record<
        years,
        Readonly<
            Record<
                cities,
                number
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

type BasicProfessionSalaries = Record<professions, number>;

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
}>;

export const APP_CONFIG = new InjectionToken<AppConfig>('AppConfig');

export const AppConfigValue: AppConfig = {
    basicProfessionSalaries: {
        Developer: 30000,
        Teacher: 27000,
        Cashier: 25000
    },
    basicTaxRates: {
        '2019': {
            stockholm: 30,
            gothenburg: 25
        },
        '2020': {
            stockholm: 30,
            gothenburg: 25
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
    ]
};