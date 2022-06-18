import { ControlProgressDisplayService } from './../../../service/control-progress-display.service';
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
  constructor(private controlProgressDisplayService: ControlProgressDisplayService) {
    this.controlProgressDisplayService.openedProgressList.subscribe((res: Array<string>) => {
      this.progressList = res;
    });

    this.controlProgressDisplayService.openedProgress.subscribe((res: string) => {
      this.openedProgressId = res;
    });
  }

  ngOnInit(): void {
  }

  checkProgressIsActive(): boolean {
    return this.progressId == this.openedProgressId;
  }

  ngAfterViewInit(): void {
  }

}
