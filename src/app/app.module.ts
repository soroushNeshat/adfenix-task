import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { PayrollContainerComponent } from './payroll/payroll-container/payroll-container.component';
import { PayrollFormComponent } from './payroll/payroll-form/payroll-form.component';
import { PAYROLL_FEATURE_KEY } from './payroll/store/payroll.state';
import { payrollReducer } from './payroll/store/payroll.reducers';
import { AppConfigValue, APP_CONFIG } from './app.config';
import { PayrollCalculationResultComponent } from './payroll/payroll-calculation-result/payroll-calculation-result.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PayrollContainerComponent,
    PayrollFormComponent,
    PayrollCalculationResultComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ [PAYROLL_FEATURE_KEY]: payrollReducer }),
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
