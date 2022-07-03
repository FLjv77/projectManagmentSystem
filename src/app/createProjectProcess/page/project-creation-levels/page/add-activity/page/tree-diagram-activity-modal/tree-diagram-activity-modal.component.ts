import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-diagram-activity-modal',
  templateUrl: './tree-diagram-activity-modal.component.html',
  styleUrls: ['./tree-diagram-activity-modal.component.scss']
})
export class TreeDiagramActivityModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public closeModal(){
    const modal = document.getElementById('view-activity-diagram-modal');
    modal?.classList.add('out');
  }
  public openCloseList(){
    
  }
}
