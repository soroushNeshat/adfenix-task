import { PayrollState, PAYROLL_FEATURE_KEY } from "./payroll/store/payroll.state";

export interface AppState {
    [PAYROLL_FEATURE_KEY]: PayrollState;
}