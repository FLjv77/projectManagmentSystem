import { Router } from '@angular/router';
import { Allocation } from './../../model/advanceSearch';
import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";

@Component({
  selector: 'app-advanced-search-according-to-allocation',
  templateUrl: './advanced-search-according-to-allocation.component.html',
  styleUrls: ['./advanced-search-according-to-allocation.component.scss',
   '../../../projectManagement/page/chart-report-project/chart-report-project.component.scss']
})
export class AdvancedSearchAccordingToAllocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initoption2();
  }
  public option2: any;

  private initoption2() {
    this.option2 = {

      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 20, name: 'پرداختی', itemStyle: {color: '#7fcccd'} },
            { value: 80, name: 'مانده حساب' ,
              itemStyle: {color: '#AEAEAE',
              },
              textStyle: {
                fontFamily: ' Vazir, Raymon, Arial, Helvetica, sans-serif',
              }
              },

          ],

          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}
