import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonDataForCreateActivityService {
  public createdActivityList = new EventEmitter<any>();
  constructor() { }
}
