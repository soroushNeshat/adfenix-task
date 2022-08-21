import { PayrollState, payrollFeatureKey } from "./payroll/store/payroll.state";

export interface AppState {
    [payrollFeatureKey]: PayrollState;
}