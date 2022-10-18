import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberFormaterService {

  constructor() { }

  covertToFrNumber(num: any):string {
    let result = num.toString();
    result = result.replace(/0/gi,'۰');
    result = result.replace(/1/gi,"۱");
    result = result.replace(/2/gi,"۲");
    result = result.replace(/3/gi,"۳");
    result = result.replace(/4/gi,"۴");
    result = result.replace(/5/gi,'۵');
    result = result.replace(/6/gi,'۶');
    result = result.replace(/7/gi,'۷');
    result = result.replace(/8/gi,'۸');
    result = result.replace(/9/gi,'۹');
    result = result.replace(/,/gi,',');
    return result;
  }

  convertfrTOen(fr: string):string {
    let result = fr.toString();
    result = result.replace(/۰/gi,'0');
    result = result.replace(/۱/gi,"1");
    result = result.replace(/۲/gi,"2");
    result = result.replace(/۳/gi,"3");
    result = result.replace(/۴/gi,"4");
    result = result.replace(/۵/gi,'5');
    result = result.replace(/۶/gi,'6');
    result = result.replace(/۷/gi,'7');
    result = result.replace(/۸/gi,'8');
    result = result.replace(/۹/gi,'9');
    return result;
  }
}
