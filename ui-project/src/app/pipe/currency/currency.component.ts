
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'currencyString'})
export class CurrencyComponent implements PipeTransform  {

  transform(value: string, curType: string): string {

    return value  + curType ;
  }


}
