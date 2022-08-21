import { Component, Input, OnInit } from '@angular/core';
import { FormMetadata } from '../models/form-metadata.model';

@Component({
  selector: 'app-payroll-form',
  templateUrl: './payroll-form.component.html',
  styleUrls: ['./payroll-form.component.scss']
})
export class PayrollFormComponent implements OnInit {
  @Input() metadata: FormMetadata;

  constructor() { }

  ngOnInit(): void {
    console.log(this.metadata);
  }
}
