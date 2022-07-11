import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-workspace',
  templateUrl: './view-workspace.component.html',
  styleUrls: ['./view-workspace.component.scss']
})
export class ViewWorkspaceComponent implements OnInit {

   // public data = [
   //    {name: 'row1', tasks: [
   //        {name: 'task1', from: '2015/12/10', to: '2016/02/15'},
   //        {name: 'task2',from: '2015/12/10', to: '2016/02/15'}
   //        ]
   //    },
   //    {name: 'row2', tasks: [
   //        {name: 'task3', from: '2015/12/10', to: '2016/02/15'},
   //        {name: 'task4', from: '2015/12/10', to: '2016/02/15'}
   //      ]
   //    },
   // ];

  constructor(private router: Router) { }
  ngOnInit() {
  }
  public goToEditProject() {
    this.router.navigate(['../../projectManagement/editProject'])
  }
  public goToActivityProject() {
    this.router.navigate(['../../projectManagement/InformationActivity'])
  }
  public goToChartPage() {
    this.router.navigate(['../../projectManagement/InformationActivity'])
  }
  

}
