import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checked-reports',
  templateUrl: './checked-reports.component.html',
  styleUrls: ['./checked-reports.component.scss', '../../project-controle-reports.component.scss'
,'../../../view-chart-progress-roport/view-chart-progress-roport.component.scss']
})
export class CheckedReportsComponent implements OnInit {

  public openCloseAnswer1:boolean = false;
  public openCloseAnswer2:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openAnswer(id: number){
    const show = document.getElementById('answer'+id);
    if (show) {
      if(show.style.display == 'block'){
        show.style.display = 'none';
        if(id==1){
          this.openCloseAnswer1 = false;
        }
        else{this.openCloseAnswer2 = false}
      }
      else {
        show.style.display = 'block';
        if(id==1){
          this.openCloseAnswer1 = true;
        }
        else{this.openCloseAnswer2 = true}
      }
    }
    
    
  }

}
