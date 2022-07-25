import { Cost } from './../../model/advanceSearch';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search-according-to-cost',
  templateUrl: './advanced-search-according-to-cost.component.html',
  styleUrls: ['./advanced-search-according-to-cost.component.scss',
  '../../../projectManagement/page/chart-report-project/chart-report-project.component.scss',
   '../advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class AdvancedSearchAccordingToCostComponent implements OnInit {
  public cost: Cost;
  public optionsCost: any;

  constructor() { }

  ngOnInit(): void {
    this.initChartIncome();
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
        data: ['شرکت-1', 'شرکت-2', 'شرکت-3', 'شرکت-4', 'شرکت-5']
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
          data: ['مهر', 'شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین']
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
          name: 'شرکت-1',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210],
          itemStyle: {color: '#ffd000'}
        },
        {
          name: 'شرکت-2',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310],
          itemStyle: {color: '#ffd519'}
        },
        {
          name: 'شرکت-3',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410],
          itemStyle: {color: '#AEAEAE'}
        },
        {
          name: 'شرکت-4',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320],
          itemStyle: {color: '#bb9900'}
        },
        {
          name: 'شرکت-5',
          type: 'line',
          stack: 'counts',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: { normal: {} },
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          itemStyle: {color: '#525252cc'}
        }
      ]
    };

  }
}
