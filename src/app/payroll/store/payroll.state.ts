import { CalculationResult } from "../models/calculation-result.model";
import { FormMetadata } from "../models/form-metadata.model";

export const PAYROLL_FEATURE_KEY = "payroll";

export interface PayrollState {
    formMetadata: FormMetadata;
    calculationResult: CalculationResult;
}

export const payrollInitialState: PayrollState = {
    formMetadata: null,
    calculationResult: null
};