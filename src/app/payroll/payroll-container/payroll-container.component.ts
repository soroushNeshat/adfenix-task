import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from 'src/app/app.config';
import { AppState } from 'src/app/app.state';
import { CalculationResult } from '../models/calculation-result.model';
import { FormData } from '../models/form-data.model';
import { FormMetadata } from '../models/form-metadata.model';
import { calculateResultAction, loadFormMetadataAction } from '../store/payroll.actions';
import { selectCalculationResult, selectFormMetadata } from '../store/payroll.selectors';

@Component({
  selector: 'app-payroll-container',
  templateUrl: './payroll-container.component.html',
  styleUrls: ['./payroll-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PayrollContainerComponent implements OnInit {
  readonly scrollIntoResult$ = new ReplaySubject<void>();
  readonly formMetadata$: Observable<FormMetadata>;
  readonly calculationResult$: Observable<CalculationResult>;

  constructor(
    private readonly _store: Store<AppState>,
    @Inject(APP_CONFIG) private readonly appConfig: AppConfig
  ) {
    this.formMetadata$ = this._store.select(selectFormMetadata);
    this.calculationResult$ = this._store.select(selectCalculationResult).pipe(tap(() => this.scrollIntoResult$.next()));
  }

  ngOnInit(): void {
    this._store.dispatch(loadFormMetadataAction({ appConfig: this.appConfig }));
  }

  formSubmitHandler(formData: FormData): void {
    this._store.dispatch(calculateResultAction({ formData, appConfig: this.appConfig }));
  }
}
