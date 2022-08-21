import { createAction, props } from '@ngrx/store';
import { AppConfig } from 'src/app/app.config';

export const loadFormMetadataAction = createAction(
  '[Payroll] Load Form Metadata',
  props<{ appConfig: AppConfig }>()
);