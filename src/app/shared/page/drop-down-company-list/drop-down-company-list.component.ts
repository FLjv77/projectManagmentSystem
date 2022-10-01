import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Select2OptionData} from "ng-select2";
import { AdvancedSearchConnecctToApiService } from 'src/app/advancedSearch/service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { CompanyListService } from 'src/app/workSpace/service/companyListDTO/company-list.service';
import { ApiResult } from '../../../auth/model/authDTO';

@Component({
  selector: 'app-drop-down-company-list',
  templateUrl: './drop-down-company-list.component.html',
  styleUrls: ['./drop-down-company-list.component.scss', '../drop-down-project-list/drop-down-project-list.component.scss']
})
export class DropDownCompanyListComponent implements OnInit {

  public placeHolder: Select2OptionData;
  public companyData: Array<Select2OptionData>;
  @Output() companyIdSelected = new EventEmitter<string | string[]>();
  @Input() customStyle: string;
  constructor(private companyListService: CompanyListService,
    private advancedSearchConnecctToApiService: AdvancedSearchConnecctToApiService) { }

  ngOnInit(): void {
    this.initListCompany();
    this.getCompanyList();
  }

  private getCompanyList() {
    this.companyListService.CompanySelected(
      1, 50
    ).subscribe((res: ApiResult<CompanySelectedDTO[]>) => {
      for(let i=0; i<res.data.length; i++) {
        let obj = {
          text: res.data[i].companyName,
          id: res.data[i].companyId
        }
        this.companyData.push(obj);
      }
    });
  }

  public selectedCompany(event: string | string[]) {
    this.companyIdSelected.emit(event);
    this.advancedSearchConnecctToApiService.companyIdSelected.emit(event);
  }

  private initListCompany() {
    this.placeHolder = {
      text: 'انتخاب شرکت',
      id: 'none'
    }

    this.companyData = new Array<Select2OptionData>();
  }
}
