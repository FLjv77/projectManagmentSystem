import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-submit-progress-reporter',
  templateUrl: './submit-progress-reporter.component.html',
  styleUrls: ['./submit-progress-reporter.component.scss', '../../../projectManagement/page/activity/information-activity/page/activity-relationships/activity-relationships.component.scss']
})
export class SubmitProgressReporterComponent implements OnInit {

  public path1: DisplayPathModel;
  public path2: DisplayPathModel;

  private _transformer = (node: Family, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );dataSource = new MatTreeFlatDataSource(
    this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = FAMILY_TREE;
  }

  hasChild = (_: number,
    node: ExampleFlatNode) => node.expandable;

  public selectedToggle:number=1;
  ngOnInit(): void {
    this.initDisplayPath();
  }
  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('ارسال گزارش', false, '');
  }

  public setSelectedToggle(state: number){
    this.selectedToggle = state;
  }
}

interface Family {
  name: string;
  children?: Family[];
}

const FAMILY_TREE: Family[] = [
  {
    name: "Joyce",
    children: [
      { name: "Mike" },
      { name: "Will" },
      { name: "Eleven" },
      { name: "Lucas" },
      { name: "Dustin" },
    ],
  },
  {
    name: "Jean",
    children: [{ name: "Otis" }, { name: "Maeve" }],
  },];

  /** Flat node with expandable and level information */
  interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
  }
