import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-add-activity',
  templateUrl: './submit-add-activity.component.html',
  styleUrls: ['./submit-add-activity.component.scss']
})
export class SubmitAddActivityComponent implements OnInit {
  
  public selectedToggle:number=1;

  constructor() { }

  ngOnInit(): void {
    
  }
 
  public setSelectedToggle(state: number){
    this.selectedToggle = state;
  }

}
