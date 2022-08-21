import { Component, Input, OnInit } from '@angular/core';
import { CalculationResult } from '../models/calculation-result.model';

@Component({
  selector: 'app-payroll-calculation-result',
  templateUrl: './payroll-calculation-result.component.html',
  styleUrls: ['./payroll-calculation-result.component.scss']
})
export class PayrollCalculationResultComponent implements OnInit {
  @Input() result: CalculationResult;

  constructor() { }

  ngOnInit(): void {
    console.log(this.result);
  }

}
