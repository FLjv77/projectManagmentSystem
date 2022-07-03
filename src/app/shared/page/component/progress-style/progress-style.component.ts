import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-style',
  templateUrl: './progress-style.component.html',
  styleUrls: ['./progress-style.component.scss']
})
export class ProgressStyleComponent implements OnInit {
  progressList: Array<string>;
  @Input() progressId: string;
  @Input() progressColor: string;
  openedProgressId: string;
  constructor() {
  }

  ngOnInit(): void {
  }

  checkProgressIsActive(): boolean {
    return this.progressId == this.openedProgressId;
  }

  ngAfterViewInit(): void {
  }

}
