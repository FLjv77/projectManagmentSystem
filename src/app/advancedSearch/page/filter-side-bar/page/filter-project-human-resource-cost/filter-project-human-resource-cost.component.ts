import { NumberFormaterService } from './../../../../../shared/service/number/number-formater.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-filter-project-human-resource-cost',
  templateUrl: './filter-project-human-resource-cost.component.html',
  styleUrls: ['./filter-project-human-resource-cost.component.scss', '../../../advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class FilterProjectHumanResourceCostComponent implements OnInit {
  @Output() handleMaxValue = new EventEmitter<number>();
  @Output() handleMinValue = new EventEmitter<number>();

  public maxValue: number = 0;
  public minValue: number = 0;

  constructor(private numberFormaterService:NumberFormaterService) { }

  ngOnInit(): void {
  }

  public formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }
    return value;
  }

  public changeMax(event: MatSliderChange) {
    if(event.value) this.handleMaxValue.emit(event.value);
  }

  public changeMin(event: MatSliderChange) {
    if(event.value) this.handleMinValue.emit(event.value);
  }

  public getNumberWithSeparator(value: number): string {
    let valueToStr = value.toString().split('');
    let res = '';
    let len = valueToStr.length;
    for (let i = 0; i < len; i++) {
      if ((len - i) % 3 == 0 && (i) != 0) {
        res =  res + ',' + valueToStr[i];
      } else {
        if (valueToStr[i]) res = res + valueToStr[i];
      }
    }

    return res;
  }

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num)
  }
}
