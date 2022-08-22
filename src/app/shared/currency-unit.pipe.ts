import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyUnit'
})
export class CurrencyUnitPipe implements PipeTransform {
  transform(value: string, currency: string): string {
    return `${value} ${currency}`;
  }
}
