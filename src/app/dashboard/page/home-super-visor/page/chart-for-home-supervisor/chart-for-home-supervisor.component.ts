import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-for-home-supervisor',
  templateUrl: './chart-for-home-supervisor.component.html',
  styleUrls: ['./chart-for-home-supervisor.component.scss']
})
export class ChartForHomeSupervisorComponent implements OnInit {

  public optionForChart: any;
  constructor() { }

  ngOnInit(): void {
    this.initoptionChart();
  }

  private initoptionChart() {
    this.optionForChart = {
      legend: {
        textStyle: {
          fontFamily: ' Vazir, Raymon, Arial, Helvetica, sans-serif',
        }
      },
      tooltip: {},
      dataset: {
        source: [
          ['product', 'گزارش بررسی نشده', 'گزارش بررسی شده'],
          ['شرکت اول', 43, 85],
          ['شرکت دوم', 83, 73],
          ['شرکت سوم', 86, 65],
          ['شرکت چهارم', 72, 53]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {name: 'تعداد گزارش',},
      series: [{ type: 'bar',itemStyle: {color: '#407a7a'} }, { type: 'bar',itemStyle: {color: '#46d5d7'} }]
    };
  }
}
