import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";

@Component({
  selector: 'app-tree-diagram-activity-modal',
  templateUrl: './tree-diagram-activity-modal.component.html',
  styleUrls: ['./tree-diagram-activity-modal.component.scss',
  '../../../../../../../projectManagement/page/activity/information-activity/page/activity-relationships-tree-mode/activity-relationships-tree-mode.component.scss']
})
export class TreeDiagramActivityModalComponent implements OnInit {

  public showList1: boolean = false;
  public showList2: boolean = false;

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

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'فعالیت 1',
    children: [{name: 'ریز فعالیت 1'}, {name: 'ریز فعالیت 2'}, {name: 'ریز فعالیت 3'}],
  },
  {
    name: 'فعالیت 2',
    children: [
      {
        name: 'ریز فعالیت 1',
      },
      {
        name: 'ریز فعالیت 2',
      },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
