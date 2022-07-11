import { Component, OnInit } from '@angular/core';
import {Select2OptionData} from "ng-select2";

@Component({
  selector: 'app-filter-project-geographical-location',
  templateUrl: './filter-project-geographical-location.component.html',
  styleUrls: ['./filter-project-geographical-location.component.scss', '../../../../../shared/page/drop-down-project-list/drop-down-project-list.component.scss']
})
export class FilterProjectGeographicalLocationComponent implements OnInit {
  public placeHolder: Select2OptionData;
  public stateData: Array<Select2OptionData>;

  constructor() { }

  ngOnInit(): void {
    this.initListCompany();
  }

  private initListCompany() {
    this.placeHolder = {
      text: 'انتخاب استان',
      id: 'none'
    }

    this.stateData = [
      {
        text: 'آذربایجان غربی',
        id: 'Basic 1'
      },
      {
        text: 'آذربایجان شرقی',
        id: 'Basic 2'
      },
      {
        text: 'اصفهان',
        id: 'Basic 2'
      },
      {
        text: 'اردبیل',
        id: 'Basic 2'
      },
      {
        text: 'خراسان رضوی',
        id: 'Basic 3'
      },
      {
        text: 'خراسان جنوبی',
        id: 'Basic 4'
      },
      {
        text: 'خراسان شمالی',
        id: 'Basic 4'
      },
      {
        text: 'سیستان و بلوچستان',
        id: 'Basic 4'
      },
      {
        text: 'فارس',
        id: 'Basic 4'
      },
      {
        text: 'بوشهر',
        id: 'Basic 4'
      },
      {
        text: 'کرمان',
        id: 'Basic 4'
      },
      {
        text: 'گلستان',
        id: 'Basic 4'
      },
      {
        text: 'مازندران',
        id: 'Basic 4'
      },
      {
        text: 'گیلان',
        id: 'Basic 4'
      },
      {
        text: 'یزد',
        id: 'Basic 4'
      },
      {
        text: 'سمنان',
        id: 'Basic 4'
      },
      {
        text: 'مرکزی',
        id: 'Basic 4'
      },
      {
        text: 'همدان',
        id: 'Basic 4'
      },
      {
        text: 'کرمانشاه',
        id: 'Basic 4'
      }
    ];
  }

}
