import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import { ActivityConnectToApiService } from 'src/app/projectManagement/service/activity/activityConnectToApi/activity-connect-to-api.service';
import { ApiResult } from '../../../../../../auth/model/authDTO';
import { ActivityHierarchicalStructureSelectedDTO } from 'src/app/projectManagement/model/activity/activityDto';
import { ActivatedRoute } from '@angular/router';
import { HandleDisplayErrorService } from 'src/app/shared/service/handleError/handle-display-error.service';

@Component({
  selector: 'app-activity-relationships-tree-mode',
  templateUrl: './activity-relationships-tree-mode.component.html',
  styleUrls: ['./activity-relationships-tree-mode.component.scss']
})

export class ActivityRelationshipsTreeModeComponent implements OnInit {
  private projectId: string;
  public TREE_DATA: TreeMode[] = [];

  ngOnInit(): void {
    this.setProjectId();
    this.getActivityInTreeMode();
  }

  private _transformer = (node: TreeMode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  private setProjectId() {
    let id = this.activeRouting.snapshot.queryParamMap.get('projectId');
    if(id) this.projectId = id;
  }

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

  constructor(
    private activityConnectToApiService: ActivityConnectToApiService,
    private activeRouting: ActivatedRoute,
    private handleDisplayErrorService: HandleDisplayErrorService
    ) {}

  private getActivityInTreeMode() {
    this.activityConnectToApiService.showHierarchicalStructureActivities(this.projectId).subscribe(
      (res: ApiResult<ActivityHierarchicalStructureSelectedDTO[]>) => {
        for(let i=0; i<res.data.length; i++) {
          let obj = new TreeMode();
          obj.name = res.data[i].activityName;

          for(let j=0; j<res.data[i].childActivities.length; j++) {
            let obj2 = new TreeMode();
            obj2.name = res.data[i].childActivities[j].activityName
            obj.children?.push(obj2);
          }
          this.TREE_DATA.push(obj);
        }
        this.dataSource.data = this.TREE_DATA;
      }
    );
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}


class TreeMode {
  name: string;
  children?: TreeMode[];
}

class ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
