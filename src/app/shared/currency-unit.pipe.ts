import { Inject, Pipe, PipeTransform } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../app.config';

@Pipe({
  name: 'currencyUnit'
})
export class CurrencyUnitPipe implements PipeTransform {
  constructor(@Inject(APP_CONFIG) private readonly _appConfig: AppConfig) { }

  transform(value: string): string {
    return `${value} ${this._appConfig.currencyUnit}`;
  }
}
