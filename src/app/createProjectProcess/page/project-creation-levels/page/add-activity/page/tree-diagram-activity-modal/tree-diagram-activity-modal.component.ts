import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-diagram-activity-modal',
  templateUrl: './tree-diagram-activity-modal.component.html',
  styleUrls: ['./tree-diagram-activity-modal.component.scss',
  '../../../../../../../projectManagement/page/activity/information-activity/page/activity-relationships/activity-relationships.component.scss']
})
export class TreeDiagramActivityModalComponent implements OnInit {

  public showList1: boolean = false;
  public showList2: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public closeModal(){
    const modal = document.getElementById('view-activity-diagram-modal');
    modal?.classList.add('out');
  }
  public openCloseList(id: number){
    if(id==1){
      if(this.showList1 == false){
        this.showList1 = true;
      }
      else{
        this.showList1 = false;
      }
    }
    else {
      if(this.showList2 == false){
        this.showList2 = true;
      }
      else{
        this.showList2 = false;
      }
    }
  }
}
