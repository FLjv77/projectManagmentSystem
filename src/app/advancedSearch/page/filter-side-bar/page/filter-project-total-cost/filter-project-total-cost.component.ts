import { NumberFormaterService } from './../../../../../shared/service/number/number-formater.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';

@Component({
  selector: 'app-filter-project-total-cost',
  templateUrl: './filter-project-total-cost.component.html',
  styleUrls: ['./filter-project-total-cost.component.scss', '../../../advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class FilterProjectTotalCostComponent implements OnInit {
  public maxValue: number = 0;
  public minValue: number = 0;
  @Output() handleMaxValue = new EventEmitter<number>();
  @Output() handleMinValue = new EventEmitter<number>();
  public inputCustomStyle: InputCustomStyle;
  public minFormControl  = new FormControl();
  public maxFormControl  = new FormControl();

  constructor(private numberFormaterService:NumberFormaterService) { }


  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public changeMax(event: any) {
    if(event) this.handleMaxValue.emit(event);
  }

  public changeMin(event: any) {
    if(event) this.handleMinValue.emit(event);
  }

  public formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }
    return value;
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


  public clearFilter() {
    this.handleMaxValue.emit(undefined);
    this.handleMinValue.emit(undefined);
    this.maxFormControl.reset();
    this.minFormControl.reset();
  }
}
