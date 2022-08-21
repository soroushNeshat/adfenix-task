import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppConfig, APP_CONFIG } from 'src/app/app.config';
import { AppState } from 'src/app/app.state';
import { FormMetadata } from '../models/form-metadata.model';
import { loadFormMetadataAction } from '../store/payroll.actions';
import { selectFormMetadata } from '../store/payroll.selectors';

@Component({
  selector: 'app-payroll-container',
  templateUrl: './payroll-container.component.html',
  styleUrls: ['./payroll-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PayrollContainerComponent implements OnInit {

  readonly formMetadata$: Observable<FormMetadata>;

  constructor(
    private readonly store: Store<AppState>,
    @Inject(APP_CONFIG) private readonly appConfig: AppConfig
  ) {
    this.formMetadata$ = store.select(selectFormMetadata);
  }

  ngOnInit(): void {
    this.store.dispatch(loadFormMetadataAction({ appConfig: this.appConfig }));
  }
}
