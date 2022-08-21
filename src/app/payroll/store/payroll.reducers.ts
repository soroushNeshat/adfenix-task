import { createReducer, on } from "@ngrx/store";
import { first, keys } from "lodash";
import { calculateResultAction, loadFormMetadataAction } from "./payroll.actions";
import { payrollInitialState } from "./payroll.state";

export const payrollReducer = createReducer(
    payrollInitialState,
    on(loadFormMetadataAction, (state, action) => {
        const professions = keys(action.appConfig.basicProfessionSalaries);
        const years = keys(action.appConfig.basicTaxRates);
        const cities = keys(action.appConfig.basicTaxRates[first(years)]);
        return {
            ...state,
            formMetadata: {
                professions,
                years,
                cities
            }
        };
    }),
    on(calculateResultAction, (state, action) => {
        return {
            ...state,
            calculationResult: {
                grossSalary: 10000,
                netSalary: 5000
            }
        };
    })
);