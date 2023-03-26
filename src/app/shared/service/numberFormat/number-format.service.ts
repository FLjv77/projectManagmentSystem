import { number } from 'echarts';
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberFormatService {

  constructor() { }

  public separate(Number:string) {
    Number+= '';
    Number= Number.replace(',', '');
    let x = Number.split('.');
    let y = x[0];
    let z= x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
    y= y.replace(rgx, '$1' + ',' + '$2');
    return y+ z;
  }

//   public separateNum(value:number, input:FormControl) {
//     /* seprate number input 3 number */
//     var nStr = value + '';
//     nStr = nStr.replace(/\,/g, "");
//     let x = nStr.split('.');
//     let x1 = x[0];
//     let x2 = x.length > 1 ? '.' + x[1] : '';
//     var rgx = /(\d+)(\d{3})/;
//     while (rgx.test(x1)) {
//         x1 = x1.replace(rgx, '$1' + ',' + '$2');
//     }
//     if (input !== undefined) {

//         input.value = x1 + x2;
//     } else {
//         return x1 + x2;
//     }
// }
}
