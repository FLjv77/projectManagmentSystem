import { Development } from './../../model/advanceSearch';
import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { AdvancedSearchConnecctToApiService } from '../../service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { ApiResult } from '../../../auth/model/authDTO';
import { CompanyProjectProgress } from 'src/app/projectManagement/model/project/projectDto';

@Component({
  selector: 'app-advanced-search-according-to-progress',
  templateUrl: './advanced-search-according-to-progress.component.html',
  styleUrls: ['./advanced-search-according-to-progress.component.scss',
    '../../../projectManagement/page/chart-report-project/chart-report-project.component.scss',
  '../advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class AdvancedSearchAccordingToProgressComponent implements OnInit, AfterViewInit {
  public options: any;
  public options2: any;
  @Input() companyIndex: number;
  @Input() companyId: string;
  public comName: string;

  constructor(private advancedSearchConnecctToApiService: AdvancedSearchConnecctToApiService) {

  }

  ngOnInit(): void {
  }

  private getProgressOfProject() {
    let index = (this.companyIndex != undefined) ? this.companyIndex : 0;
    this.advancedSearchConnecctToApiService.ComputeCompanyProjectProgress(
      this.companyId
    ).subscribe((res: ApiResult<CompanyProjectProgress[]>) => {
      if(res.statusCode == 200 && res.isSuccess) {
        console.log(res.data);

        this.comName = (this.companyIndex != undefined) ? (res.data[index].companyName) : '';
        let data = new Array<DataForChart>();
        let data2 = new Array<number>();
        let data3 = new Array<number>();
        let dataName = new Array<string>();


        for(let i=0; i<res.data[index].projectProgresses.length; i++) {
          data2.push(res.data[index].projectProgresses[i].projectCurrentProgressPercentage);
          data3.push(res.data[index].projectProgresses[i].projectNormalProgressPercentage);
          dataName.push(res.data[index].projectProgresses[i].projectName);
        }

        this.initChart2(data2, data3, dataName);

      }
    })
  }

  ngAfterViewInit(): void {
    this.getProgressOfProject();
  }

  private initChart2(data1: number[], data2: number[], xAxisData: string[]) {
    this.options2 = {
      legend: {
        data: ['پیشرفت انجام شده', 'پیشرف مورد انتظار'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'پیشرفت انجام شده',
          type: 'bar',
          data: data1,
        },
        {
          name: 'پیشرف مورد انتظار',
          type: 'bar',
          data: data2,
        },
      ],
      animationEasing: 'elasticOut',
    };
  }
}


export class DataForChart {
  constructor(
    name: string,
    value: number
  ) {
    this.name = name;
    this.value = value;
  }
  name: string;
  value: number;
}
