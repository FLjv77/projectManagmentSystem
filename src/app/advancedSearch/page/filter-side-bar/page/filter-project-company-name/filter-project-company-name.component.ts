import {Component, Input, OnInit} from '@angular/core';
import {Select2OptionData} from "ng-select2";

@Component({
  selector: 'app-filter-project-company-name',
  templateUrl: './filter-project-company-name.component.html',
  styleUrls: ['./filter-project-company-name.component.scss', '../../../../../shared/page/drop-down-project-list/drop-down-project-list.component.scss']
})
export class FilterProjectCompanyNameComponent implements OnInit {

  public placeHolder: Select2OptionData;
  public companyData: Array<Select2OptionData>;

  constructor() { }

  ngOnInit(): void {
    this.initListCompany();
  }

  private initListCompany() {
    this.placeHolder = {
      text: 'انتخاب شرکت',
      id: 'none'
    }

    this.companyData = [
      {
        text: 'باسلام',
        id: 'Basic 1'
      },
      {
        text: 'ایرانسل',
        id: 'Basic 2'
      },
      {
        text: 'ازکی',
        id: 'Basic 2'
      },
      {
        text: 'دیجیکالا',
        id: 'Basic 2'
      },
      {
        text: 'تپسی',
        id: 'Basic 3'
      },
      {
        text: 'اسنپ',
        id: 'Basic 4'
      }
    ];
  }

}
