import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { PayrollState, PAYROLL_FEATURE_KEY } from './payroll.state';

export const selectFeature = createFeatureSelector<AppState, PayrollState>(PAYROLL_FEATURE_KEY);

export const selectFormMetadata = createSelector(
    selectFeature,
    (state: PayrollState) => state.formMetadata
);