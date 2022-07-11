import { Component, OnInit, Input } from '@angular/core';
import {Select2OptionData} from "ng-select2";

@Component({
  selector: 'app-drop-down-company-list',
  templateUrl: './drop-down-company-list.component.html',
  styleUrls: ['./drop-down-company-list.component.scss', '../drop-down-project-list/drop-down-project-list.component.scss']
})
export class DropDownCompanyListComponent implements OnInit {

  public placeHolder: Select2OptionData;
  public companyData: Array<Select2OptionData>;

  @Input() customStyle: string;
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
