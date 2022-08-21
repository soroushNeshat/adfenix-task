import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormData } from '../models/form-data.model';
import { FormMetadata } from '../models/form-metadata.model';

@Component({
  selector: 'app-payroll-form',
  templateUrl: './payroll-form.component.html',
  styleUrls: ['./payroll-form.component.scss']
})
export class PayrollFormComponent implements OnInit {
  @Input() metadata: FormMetadata;
  @Output() readonly submit = new EventEmitter<FormData>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.metadata);
  }
}
