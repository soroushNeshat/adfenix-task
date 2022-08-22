import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbInputModule, NbSelectModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { PayrollContainerComponent } from './payroll/payroll-container/payroll-container.component';
import { PayrollFormComponent } from './payroll/payroll-form/payroll-form.component';
import { payrollFeatureKey } from './payroll/store/payroll.state';
import { payrollReducer } from './payroll/store/payroll.reducers';
import { AppConfigValue, APP_CONFIG } from './app.config';
import { PayrollCalculationResultComponent } from './payroll/payroll-calculation-result/payroll-calculation-result.component';
import { environment } from '../environments/environment';
import { UnsignedIntegerInputComponent } from './shared/unsigned-integer-input/unsigned-integer-input.component';
import { ScrollIntoViewDirective } from './shared/scroll-into-view.directive';
import { CurrencyUnitPipe } from './shared/currency-unit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PayrollContainerComponent,
    PayrollFormComponent,
    PayrollCalculationResultComponent,
    UnsignedIntegerInputComponent,
    ScrollIntoViewDirective,
    CurrencyUnitPipe
  ],
  imports: [
    NbCardModule,
    NbButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NbInputModule,
    NbSelectModule,
    BrowserModule,
    StoreModule.forRoot({ [payrollFeatureKey]: payrollReducer }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    RouterModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfigValue }],
  bootstrap: [AppComponent]
})
export class AppModule { }
