import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-urban-and-inter-rural',
  templateUrl: './inter-urban-and-inter-rural.component.html',
  styleUrls: ['./inter-urban-and-inter-rural.component.scss']
})
export class InterUrbanAndInterRuralComponent implements OnInit {

  public checkCity: boolean;
  public checkVillage: boolean;
  @Input() villageList: Array<Select2OptionData>;
  @Input() cityList: Array<Select2OptionData>;
  constructor() { }

  ngOnInit(): void {
  }

  public changeValue(value:number){
    if (value == 1) {
      this.checkCity = !this.checkCity;
    }
    else if (value == 2) {
      this.checkVillage = !this.checkVillage;
    }
  }

}
