import { Development } from './../../model/advanceSearch';
import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-advanced-search-according-to-progress',
  templateUrl: './advanced-search-according-to-progress.component.html',
  styleUrls: ['./advanced-search-according-to-progress.component.scss',
    '../../../projectManagement/page/chart-report-project/chart-report-project.component.scss',
  '../advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class AdvancedSearchAccordingToProgressComponent implements OnInit, AfterViewInit {
  public options: any;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.options = {
      title: {
        top: 20,
        textStyle: {
          color: '#282828',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          name: 'Counters',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: 'پروژه-1' },
            { value: 310, name: 'پروژه-2' },
            { value: 274, name: 'پروژه-3' },
            { value: 235, name: 'پروژه-4' },
            { value: 400, name: 'پروژه-5' },
          ].sort((a, b) => a.value - b.value),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(59,59,59,0.9)',
                fontFamily: ' Vazir, Raymon, Arial, Helvetica, sans-serif',

              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(88,88,88,0.3)',
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
          },
          itemStyle: {
            normal: {
              color: '#23d8db',
            },
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: () => Math.random() * 200,
        },
      ],
    };

  }
}
