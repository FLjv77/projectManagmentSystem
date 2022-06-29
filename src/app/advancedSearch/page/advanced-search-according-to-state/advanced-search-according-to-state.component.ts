import { ProjectState } from './../../model/advanceSearch';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search-according-to-state',
  templateUrl: './advanced-search-according-to-state.component.html',
  styleUrls: ['./advanced-search-according-to-state.component.scss']
})
export class AdvancedSearchAccordingToStateComponent implements OnInit {

  public state: ProjectState;
  constructor() { }

  ngOnInit(): void {
  }

  public setState(state: ProjectState){
    this.state = state;
  }
}
