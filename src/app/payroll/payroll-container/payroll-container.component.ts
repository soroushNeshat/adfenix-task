import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from 'src/app/app.config';
import { AppState } from 'src/app/app.state';
import { CalculationResult } from '../models/calculation-result.model';
import { FormData } from '../models/form-data.model';
import { FormMetadata } from '../models/form-metadata.model';
import { PayrollCalculationResultComponent } from '../payroll-calculation-result/payroll-calculation-result.component';
import { calculateResultAction, loadFormMetadataAction } from '../store/payroll.actions';
import { selectCalculationResult, selectFormMetadata } from '../store/payroll.selectors';

@Component({
  selector: 'app-payroll-container',
  templateUrl: './payroll-container.component.html',
  styleUrls: ['./payroll-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PayrollContainerComponent implements OnInit, OnDestroy {
  private readonly _scrollIntoResultElement$ = new Subject<void>();
  private readonly _scrollIntoResultElementSub: Subscription;
  readonly formMetadata$: Observable<FormMetadata>;
  readonly calculationResult$: Observable<CalculationResult>;

  @ViewChild(PayrollCalculationResultComponent, { read: ElementRef })
  resultElementRef: ElementRef<Element>;

  constructor(
    private readonly _store: Store<AppState>,
    @Inject(APP_CONFIG) private readonly appConfig: AppConfig
  ) {
    this._scrollIntoResultElementSub = this._scrollIntoResultElement$.pipe(debounceTime(200)).subscribe(() => {
      this.resultElementRef?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });
    this.formMetadata$ = this._store.select(selectFormMetadata);
    this.calculationResult$ = this._store.select(selectCalculationResult).pipe(tap(() => this._scrollIntoResultElement$.next()));
  }

  ngOnInit(): void {
    this._store.dispatch(loadFormMetadataAction({ appConfig: this.appConfig }));
  }

  formSubmitHandler(formData: FormData): void {
    this._store.dispatch(calculateResultAction({ formData, appConfig: this.appConfig }));
  }

  ngOnDestroy(): void {
    this._scrollIntoResultElementSub.unsubscribe();
  }
}
