import { FormMetadata } from "../models/form-metadata.model";

export const PAYROLL_FEATURE_KEY = "payroll";

export interface PayrollState {
    formMetadata: FormMetadata;
}

export const payrollInitialState: PayrollState = {
    formMetadata: null
};