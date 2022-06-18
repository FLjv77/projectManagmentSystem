import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlProgressDisplayService {
  public handleOpenedProgressToggle = new EventEmitter<string>();
  public handleStopProgressToggle = new EventEmitter<string>();
  public handleToggleProgressFailedRequest = new EventEmitter<string>();

  openedProgressList = new EventEmitter<Array<string>>();
  openedProgress = new EventEmitter<string>();

  constructor() {
  }

  public setToProgressToggle(progressId: string) {
    this.handleOpenedProgressToggle.emit(progressId);
  }

  public stopToProgressToggle(progressId: string) {
    this.handleStopProgressToggle.emit(progressId);
  }

  public setToFailedProgressToggle(progressId: string) {
    this.handleToggleProgressFailedRequest.emit(progressId);
  }

  addProgressToOpenedList(progressId: string) {
    let tempList = new Array<string>();
    let isFirstTime: boolean = true;


    this.openedProgress.emit(progressId);
  }

  removeProgressFromList(progressId: string) {
    let isFirstTime: boolean = true;

    this.openedProgressList.subscribe((res: Array<string>) => {
      if (isFirstTime) {
        isFirstTime = false;
        for (let i=0; i<res.length; i++) {
          if (res[i] == progressId) {
            res.splice(i, 0);
            this.openedProgressList.emit(res);
          }
        }
      }
    });
  }
}
