import { createReducer, on } from '@ngrx/store';
import { first, keys } from 'lodash';
import { calculateResultAction, loadFormMetadataAction } from './payroll.actions';
import { payrollInitialState } from './payroll.state';

export const payrollReducer = createReducer(
    payrollInitialState,
    on(loadFormMetadataAction, (state, { appConfig }) => {
        const professions = keys(appConfig.basicProfessionSalaries);
        const cities = keys(appConfig.basicTaxRates);
        const years = keys(appConfig.basicTaxRates[first(cities)]);
        return {
            ...state,
            formMetadata: {
                professions,
                cities,
                years
            }
        };
    }),
    on(calculateResultAction, (state, { formData, appConfig }) => {
        const basicSalary = appConfig.basicProfessionSalaries[formData.profession];
        const salaryIncreaseRate = appConfig.salaryIncreaseRates.find(
            item => (item.from <= formData.yearsOfExperience) && ((item.to || Infinity) >= formData.yearsOfExperience)
        ).increaseRate;
        const bonusSalary = basicSalary * salaryIncreaseRate / 100;
        const grossSalary = basicSalary + bonusSalary;
        const basicTaxRate = appConfig.basicTaxRates[formData.city][formData.year];
        const basicTax = -(grossSalary * basicTaxRate / 100);
        const highIncomeTax = appConfig.extraHighIncomeTaxRates.reduce((p, c) => {
            const to = c.to ?? grossSalary;
            let taxableAmount: number;
            if (grossSalary < c.from) {
                taxableAmount = 0;
            } else if (grossSalary > to) {
                taxableAmount = to - c.from;
            } else {
                taxableAmount = grossSalary - c.from;
            }
            return p - taxableAmount * c.taxRate / 100;
        }, 0);
        const totalTax = basicTax + highIncomeTax;
        const netSalary = grossSalary + totalTax;
        return {
            ...state,
            calculationResult: {
                basicSalary,
                bonusSalary,
                grossSalary,
                basicTax,
                highIncomeTax,
                totalTax,
                netSalary
            }
        };
    })
);
