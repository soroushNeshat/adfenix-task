import { createAction, props } from '@ngrx/store';
import { AppConfig } from 'src/app/app.config';
import { FormData } from '../models/form-data.model';

export const loadFormMetadataAction = createAction(
  '[Payroll] Load Form Metadata',
  props<{ appConfig: AppConfig }>()
);

export const calculateResultAction = createAction(
  '[Payroll] Calculate Result',
  props<{ formData: FormData, appConfig: AppConfig }>()
);
