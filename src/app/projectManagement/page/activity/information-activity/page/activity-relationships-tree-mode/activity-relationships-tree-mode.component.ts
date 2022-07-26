import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";

@Component({
  selector: 'app-activity-relationships-tree-mode',
  templateUrl: './activity-relationships-tree-mode.component.html',
  styleUrls: ['./activity-relationships-tree-mode.component.scss']
})


export class ActivityRelationshipsTreeModeComponent implements OnInit {
  ngOnInit(): void {
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
