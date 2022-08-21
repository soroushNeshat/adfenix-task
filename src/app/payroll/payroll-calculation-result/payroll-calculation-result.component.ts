import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CalculationResult } from '../models/calculation-result.model';

@Component({
  selector: 'app-payroll-calculation-result',
  templateUrl: './payroll-calculation-result.component.html',
  styleUrls: ['./payroll-calculation-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PayrollCalculationResultComponent {
  @Input() result: CalculationResult;
}
