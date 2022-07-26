import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts/highcharts-gantt';

@Component({
  selector: 'app-time-line-project',
  templateUrl: './time-line-project.component.html',
  styleUrls: ['./time-line-project.component.scss']
})
export class TimeLineProjectComponent implements OnInit, AfterViewInit {
  @ViewChild('divRef', { static: false }) divReference: ElementRef;

  public tasks: any;
  public siries: any[];

  constructor() { }

  ngOnInit(): void {
    this.initTimeLineData();
  }

  private initTimeLineData() {
    this.siries = [
      {
        name: 'Work Order',
        type: 'gantt',
        states: { hover: { enabled: false } },
        // point: { events: { click: this.updateSelectedElement } },
        data: [
          {
            id: 's1',
            name: 'پروژه 1',
            start: Date.UTC(2020, 9, 10),
            end: Date.UTC(2020, 9, 18),
            completed: {
              amount: 1,
              fill: "#11d8f1"
            },
            accessibility:{
              description: 'Progress'
            },
            collapsed: false,
            custom:{
              taskStatus: "progress",
              taskLabel: "پروژه 1",
              taskLabelColor: '#ffffff'
            },
            // description: 'Progress',
            // drilldown: 'Progress',
            // marker: {
            //   color: 'red',
            //   fillColor : 'red',
            //   lineColor: 'red',
            //   height: 2,
            //   radius:2
            // }
          },
/*          {
            id: 'a',
            name: 'Shipment to Site',
            start: Date.UTC(2020, 9, 10),
            end: Date.UTC(2020, 9, 14),
            custom:{
              taskStatus: "completed",
              taskLabel: "Completed",
              taskLabelColor: "#047205"
            },
            // dependency: 's',
            parent: 's1'
          },
          {
            id: 'b',
            name: 'Assign to FE',
            start: Date.UTC(2020, 9, 12),
            end: Date.UTC(2020, 9, 16),
            custom:{
              taskStatus: "yetToStart",
              taskLabel: "Yet to Start",
              taskLabelColor: "#006497"
            },
            dependency: {
              to: 'a',
              lineColor:"#006497",
              marker:{
                color: "#006497",
              }
            },
            parent: 's1',
          },
          {
            id: 'c',
            name: 'Material verification by subcon',
            start: Date.UTC(2020, 9, 15),
            end: Date.UTC(2020, 9, 18),
            custom:{
              taskStatus: "onHold",
              taskLabel: "On Hold",
              taskLabelColor: "#DF0101"
            },
            parent: 's1',

          },*/
          // {
          //   name: 'Test prototype',
          //   start: Date.UTC(2014, 10, 24),
          //   end: Date.UTC(2014, 10, 29),
          //   dependency: ['a', 'b']
          // }
        ],
        dataLabels: [{
          enabled: true,
          format:
            '<div style="color:{point.custom.taskLabelColor}">' +
            '<span>{point.custom.taskLabel}</span>' +
            '</div>',
          useHTML: true,
          align: 'center'
        }]
      },
      {
        name: 'Work Order',
        type: 'gantt',
        states: { hover: { enabled: false } },
        // point: { events: { click: this.updateSelectedElement } },
        data: [
          {
            id: 's2',
            name: 'پروژه 2',
            start: Date.UTC(2020, 9, 10),
            end: Date.UTC(2020, 9, 24),
            completed: {
              amount: 1,
              fill: "#2f8891"
            },
            custom:{
              taskStatus: "progress",
              taskLabel: "پروژه 2",
              taskLabelColor: '#ffffff'
            },
          },
/*          {
            id: 'a2',
            name: 'Material verification',
            start: Date.UTC(2020, 9, 20),
            end: Date.UTC(2020, 9, 24),
            custom:{
              taskStatus: "yetToStart",
              taskLabel: "Yet to Start",
              taskLabelColor: "#006497"
            },
            // dependency: 's',
            parent: 's2'
          },
          {
            id: 'b2',
            name: 'Start of construction',
            start: Date.UTC(2020, 9, 12),
            end: Date.UTC(2020, 9, 16),
            custom:{
              taskStatus: "onHold",
              taskLabel: "On Hold",
              taskLabelColor: "#DF0101"
            },
            parent: 's2'
          },
          {
            id: 'c2',
            name: 'Picture verification before construction',
            start: Date.UTC(2020, 9, 17),
            end: Date.UTC(2020, 9, 21),
            custom:{
              taskStatus: "completed",
              taskLabel: "Completed",
              taskLabelColor: "#047205"
            },
            dependency: {
              to: 'b2',
              lineColor:"#047205",
              marker:{
                color: "#047205"
              }
            },
            parent: 's2'
          },
          {
            id: 'd2',
            name: 'Picture verification during construction',
            start: Date.UTC(2020, 9, 14),
            end: Date.UTC(2020, 9, 18),
            custom:{
              taskStatus: "progress",
              taskLabel: "Progress",
              taskLabelColor: '#7D6E00'
            },
            dependency: {
              to: 'c2',
              lineColor:"#7D6E00",
              marker:{
                color: "#7D6E00"
              }
            },
            parent: 's2'
          },
          {
            id: 'e2',
            name: 'Picture verification after construction',
            start: Date.UTC(2020, 9, 19),
            end: Date.UTC(2020, 9, 23),
            custom:{
              taskStatus: "yetToStart",
              taskLabel: "Yet to Start",
              taskLabelColor: "#006497"
            },
            parent: 's2'
          }*/
        ],
        dataLabels: [{
          enabled: true,
          format:
            '<div style="color:{point.custom.taskLabelColor}">' +
            '<span>{point.custom.taskLabel}</span>' +
            '</div>',
          useHTML: true,
          align: 'center'
        }]
      },
      {
        name: 'Work Order',
        type: 'gantt',
        states: { hover: { enabled: false } },
        // point: { events: { click: this.updateSelectedElement } },
        data: [
          {
            id: 's2',
            name: 'پروژه 3',
            start: Date.UTC(2020, 9, 12),
            end: Date.UTC(2020, 9, 19),
            completed: {
              amount: 1,
              fill: "#a3dbe5"
            },
            custom:{
              taskStatus: "progress",
              taskLabel: "پروژه 3",
              taskLabelColor: '#ffffff'
            },
          },
/*          {
            id: 'a2',
            name: 'Material verification',
            start: Date.UTC(2020, 9, 20),
            end: Date.UTC(2020, 9, 24),
            custom:{
              taskStatus: "yetToStart",
              taskLabel: "Yet to Start",
              taskLabelColor: "#006497"
            },
            // dependency: 's',
            parent: 's2'
          },
          {
            id: 'b2',
            name: 'Start of construction',
            start: Date.UTC(2020, 9, 12),
            end: Date.UTC(2020, 9, 16),
            custom:{
              taskStatus: "onHold",
              taskLabel: "On Hold",
              taskLabelColor: "#DF0101"
            },
            parent: 's2'
          },
          {
            id: 'c2',
            name: 'Picture verification before construction',
            start: Date.UTC(2020, 9, 17),
            end: Date.UTC(2020, 9, 21),
            custom:{
              taskStatus: "completed",
              taskLabel: "Completed",
              taskLabelColor: "#047205"
            },
            dependency: {
              to: 'b2',
              lineColor:"#047205",
              marker:{
                color: "#047205"
              }
            },
            parent: 's2'
          },
          {
            id: 'd2',
            name: 'Picture verification during construction',
            start: Date.UTC(2020, 9, 14),
            end: Date.UTC(2020, 9, 18),
            custom:{
              taskStatus: "progress",
              taskLabel: "Progress",
              taskLabelColor: '#7D6E00'
            },
            dependency: {
              to: 'c2',
              lineColor:"#7D6E00",
              marker:{
                color: "#7D6E00"
              }
            },
            parent: 's2'
          },
          {
            id: 'e2',
            name: 'Picture verification after construction',
            start: Date.UTC(2020, 9, 19),
            end: Date.UTC(2020, 9, 23),
            custom:{
              taskStatus: "yetToStart",
              taskLabel: "Yet to Start",
              taskLabelColor: "#006497"
            },
            parent: 's2'
          }*/
        ],
        dataLabels: [{
          enabled: true,
          format:
            '<div style="color:{point.custom.taskLabelColor}">' +
            '<span>{point.custom.taskLabel}</span>' +
            '</div>',
          useHTML: true,
          align: 'center'
        }]
      },
      {
        name: 'Work Order',
        type: 'gantt',
        states: { hover: { enabled: false } },
        // point: { events: { click: this.updateSelectedElement } },
        data: [
          {
            id: 's2',
            name: 'پروژه 4',
            start: Date.UTC(2020, 9, 15),
            end: Date.UTC(2020, 9, 27),
            completed: {
              amount: 1,
              fill: "#5e7679"
            },
            custom:{
              taskStatus: "progress",
              taskLabel: "پروژه 4",
              taskLabelColor: '#ffffff'
            },
          },
/*          {
            id: 'a2',
            name: 'Material verification',
            start: Date.UTC(2020, 9, 20),
            end: Date.UTC(2020, 9, 24),
            custom:{
              taskStatus: "yetToStart",
              taskLabel: "Yet to Start",
              taskLabelColor: "#006497"
            },
            // dependency: 's',
            parent: 's2'
          },
          {
            id: 'b2',
            name: 'Start of construction',
            start: Date.UTC(2020, 9, 12),
            end: Date.UTC(2020, 9, 16),
            custom:{
              taskStatus: "onHold",
              taskLabel: "On Hold",
              taskLabelColor: "#DF0101"
            },
            parent: 's2'
          },
          {
            id: 'c2',
            name: 'Picture verification before construction',
            start: Date.UTC(2020, 9, 17),
            end: Date.UTC(2020, 9, 21),
            custom:{
              taskStatus: "completed",
              taskLabel: "Completed",
              taskLabelColor: "#047205"
            },
            dependency: {
              to: 'b2',
              lineColor:"#047205",
              marker:{
                color: "#047205"
              }
            },
            parent: 's2'
          },
          {
            id: 'd2',
            name: 'Picture verification during construction',
            start: Date.UTC(2020, 9, 14),
            end: Date.UTC(2020, 9, 18),
            custom:{
              taskStatus: "progress",
              taskLabel: "Progress",
              taskLabelColor: '#7D6E00'
            },
            dependency: {
              to: 'c2',
              lineColor:"#7D6E00",
              marker:{
                color: "#7D6E00"
              }
            },
            parent: 's2'
          },
          {
            id: 'e2',
            name: 'Picture verification after construction',
            start: Date.UTC(2020, 9, 19),
            end: Date.UTC(2020, 9, 23),
            custom:{
              taskStatus: "yetToStart",
              taskLabel: "Yet to Start",
              taskLabelColor: "#006497"
            },
            parent: 's2'
          }*/
        ],
        dataLabels: [{
          enabled: true,
          format:
            '<div style="color:{point.custom.taskLabelColor}">' +
            '<span>{point.custom.taskLabel}</span>' +
            '</div>',
          useHTML: true,
          align: 'center'
        }]
      },
    ]
  }

  ngAfterViewInit() {
    this.createGanttOptionData(this.siries);
  }

  createGanttOptionData(siries: any){
    siries.forEach((elem: any) =>{
      elem.point = { events: { click: this.updateSelectedElement } }
    });
    this.highchartclick();
  }

  highchartclick() {

    let day = 1000 * 60 * 60 * 24;
    //   var customPointFormatter = function() {
    //   var point = this,
    //   	series = point.series,
    //     xAxis = series.xAxis,
    //     tooltip = series.chart.tooltip,
    //     start = point.start,
    //     end = point.end,
    //     assignedTo = point.assignedTo || '',
    //     range = end ? end - start : 0,
    //     dateFormat = tooltip.getDateFormat(
    //       range,
    //       point.start,
    //       xAxis.options.startOfWeek,
    //       xAxis.options.dateTimeLabelFormats
    //     )
    //   return [
    //     '<b>' + point.taskName + '</b>',
    //     '<span style="font-size: 0.8em">Start: ' + Highcharts.dateFormat(dateFormat, start) + '</span>',
    //     '<span style="font-size: 0.8em">End: ' + Highcharts.dateFormat(dateFormat, end) + '</span>',
    //     '<span style="font-size: 0.8em">Assigned To: ' + assignedTo + '</span>'
    //   ].join('<br/>')
    // }
    Highcharts.ganttChart(this.divReference.nativeElement as HTMLElement, {
      // title: {
      //   text: 'Simple Gantt Chart'
      // },
      chart: { renderTo: this.divReference.nativeElement as HTMLElement,
        events: {
          load: function() {
            Highcharts.each(
              this.series, (elem: any) =>{
                // console.log(elem);
                if(elem.name != 'Navigator 1'){
                  // console.log(elem.points)
                  elem.points.forEach((taskElem: any)=>{
                    // console.log(taskElem)
                    switch(taskElem.custom.taskStatus){
                      case "progress":
                        taskElem.update({color: "#FFF4D2"});
                        break;
                      case "completed":
                        taskElem.update({color: "#EBF7EC"});
                        break;
                      case "yetToStart":
                        taskElem.update({color: "#EBF7FE"});
                        break;
                      case "onHold":
                        taskElem.update({color: "#FFF0F0"});
                        break;

                    }
                  })
                }
              }
              //   this.series[0].points, function(p) {
              //   console.log(p);
              //   if(p.custom.taskStatus == 'progress'){
              //     p.update({ color: "#FFF4D2" });
              //   }
              //   // p.update({ color: "red" });
              // }
            );
            //Fully selected timeline
            this.xAxis[0].setExtremes();
          }
        }
      },
      tooltip: {
        enabled: false
        //   pointFormatter: customPointFormatter
        //   style:{
        //     opacity:1
        //   }
        // },
        // xAxis: {
        //   min: Date.UTC(2014, 10, 17),
        //   max: Date.UTC(2014, 10, 30)
      },
      scrollbar: {
        enabled: true
      },
      // colors:['red','blue','green'],
      navigator: {
        enabled: true,
        series: {
          type: 'gantt',
          pointPadding: 0.25,
        },
        yAxis: {
          min: 0,
          max: 3,
          reversed: true,
        }
      },
      xAxis: [{
        tickInterval: day, //day * 7 for week
        labels:{
          format:''
        },

      }],
      // rangeSelector: {
      //   enabled: true,
      //   // selected: 0,
      //   // inputEnabled: false
      //   inputPosition:{
      //     align: "left",
      //     x: 0,
      //     y: 0
      //   },
      //   buttonPosition: {
      //     align: "right",
      //     x: 0,
      //     y: 0
      //   },
      // },
      series: this.siries
    });
  }

  updateSelectedElement(){
    console.log(this)
  }
}
