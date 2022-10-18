import { Cost } from './../../model/advanceSearch';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { AdvancedSearchConnecctToApiService } from '../../service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';

@Component({
  selector: 'app-advanced-search-according-to-cost',
  templateUrl: './advanced-search-according-to-cost.component.html',
  styleUrls: ['./advanced-search-according-to-cost.component.scss',
  '../../../projectManagement/page/chart-report-project/chart-report-project.component.scss',
   '../advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class AdvancedSearchAccordingToCostComponent implements OnInit, AfterViewInit {
  public cost: Cost;
  public optionsCost: any;
  @Input() projectList: ProjectSelectedDTO[];
  private projectListName: string[] = [];
  private projectListCostHumanResource: number[] = [];
  private projectListCostInfrastructureCost: number[] = [];
  private projectListCostTotal: number[] = [];

  constructor(private advancedSearchConnecctToApiService: AdvancedSearchConnecctToApiService) {}

  ngAfterViewInit(): void {
    this.subscribeProjectSelected();
  }

  ngOnInit(): void {}

  private subscribeProjectSelected() {
    if(this.projectList) {
      this.getListProject();
      this.getListProjectCostTotal();
      this.getListProjectCostHumanResource();
      this.getListProjectCostInfrastructureCost();

      this.initChartIncome();
    }

    this.advancedSearchConnecctToApiService.projectListHandel.subscribe((res: ProjectSelectedDTO[]) => {
      this.projectList = res;
      this.getListProject();
      this.initChartIncome();
      this.getListProjectCostHumanResource();
      this.getListProjectCostInfrastructureCost();
      this.getListProjectCostTotal();
    });
  }

  private getListProject() {
    for(let i=0; i<this.projectList.length; i++) {
      this.projectListName.push(this.projectList[i].projectName);
    }
 }

 private getListProjectCostHumanResource() {
  for(let i=0; i<this.projectList.length; i++) {
    this.projectListCostHumanResource.push(this.projectList[i].humanResourceCost);
  }
}

private getListProjectCostInfrastructureCost() {
  for(let i=0; i<this.projectList.length; i++) {
    this.projectListCostInfrastructureCost.push(this.projectList[i].infrastructureCost);
  }
}

private getListProjectCostTotal() {
  for(let i=0; i<this.projectList.length; i++) {
    this.projectListCostTotal.push(this.projectList[i].infrastructureCost + this.projectList[i].humanResourceCost);
  }
}

  private initChartIncome() {
    this.optionsCost = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['هزینه منابع انسانی','هزینه زیر ساخت','هزینه کل']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          dataTextStyle: {
            fontFamily: ' Vazir, Raymon, Arial, Helvetica, sans-serif'
          },
          type: 'category',
          boundaryGap: false,
          data: this.projectListName
        }
      ],
      yAxis: [
        {
          type: 'value',
          nameTextStyle: {
            fontFamily: ' Vazir, Raymon, Arial, Helvetica, sans-serif',
            fontWeight: 'bold'
          },
          name: 'ریال'
        }
      ],
      series: [
        {
          name: 'هزینه منابع انسانی',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: this.projectListCostHumanResource,
          itemStyle: {color: '#519D9E'}
        },
        {
          name: 'هزینه زیر ساخت',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: this.projectListCostInfrastructureCost,
          itemStyle: {color: '#519D9E'}
        },
        {
          name: 'هزینه کل',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: this.projectListCostTotal,
          itemStyle: {color: '#4c6666'}
        }
      ]
    };

  }
}
