import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormData } from '../models/form-data.model';
import { FormMetadata } from '../models/form-metadata.model';

@Component({
  selector: 'app-payroll-form',
  templateUrl: './payroll-form.component.html',
  styleUrls: ['./payroll-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PayrollFormComponent {
  @Input() metadata: FormMetadata;
  @Output() readonly formSubmit = new EventEmitter<FormData>();
}
