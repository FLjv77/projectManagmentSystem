import { sidebarState } from './../../model/sidebarModel';
import { Injectable, EventEmitter } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarControleServiceService {
  public sideBarIsOpen = new Subject<boolean>();
  public state = new EventEmitter<sidebarState>();
  public showReport = new EventEmitter<boolean>();


  constructor() { }
}
