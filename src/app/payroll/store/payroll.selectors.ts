import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { PayrollState, payrollFeatureKey } from './payroll.state';

export const selectFeature = createFeatureSelector<AppState, PayrollState>(payrollFeatureKey);

export const selectFormMetadata = createSelector(
    selectFeature,
    (state: PayrollState) => state.formMetadata
);

export const selectCalculationResult = createSelector(
    selectFeature,
    (state: PayrollState) => state.calculationResult
);
