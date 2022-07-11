import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line-project',
  templateUrl: './time-line-project.component.html',
  styleUrls: ['./time-line-project.component.scss']
})
export class TimeLineProjectComponent implements OnInit {
  public tasks: any;
  constructor() { }

  ngOnInit(): void {
    this.initTimeLineData();
  }

  private initTimeLineData() {
    this.tasks = [
      {
        id: 1,
        label: 'task 1',
        start: '09:10',
        end: '11:30',
      },
      {
        id: 2,
        label: 'task 2',
        start: '10:00',
        end: '11:00',
      },
      {
        id: 3,
        label: 'task 2a',
        start: '10:00',
        end: '12:25',
      },
      {
        id: 4,
        label: 'task 2a',
        start: '10:40',
        end: '12:00',
      },
      {
        id: 5,
        label: 'task 2a',
        start: '11:40',
        end: '13:48',
      },
      {
        id: 6,
        label: 'task 2a',
        start: '12:20',
        end: '13:30',
      },
      {
        id: 7,
        label: 'task 2a',
        start: '12:40',
        end: '13:50',
      },
      {
        id: 8,
        label: 'task 2a',
        start: '12:00',
        end: '13:20',
      }
    ];

  }
}
