import { sidebarState } from './../../model/sidebarModel';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarControleServiceService {

  public state = new EventEmitter<sidebarState>();

  constructor() { }
}
