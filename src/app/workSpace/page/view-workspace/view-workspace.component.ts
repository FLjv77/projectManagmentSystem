import { NumberFormaterService } from './../../../shared/service/number/number-formater.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DisplayPathModel} from "../../../shared/model/displayPathModel";

@Component({
  selector: 'app-view-workspace',
  templateUrl: './view-workspace.component.html',
  styleUrls: ['./view-workspace.component.scss']
})
export class ViewWorkspaceComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public projectStateDisplay: ProjectState = 0;

  constructor(private router: Router,
              private numberFormaterService:NumberFormaterService) { }

  ngOnInit() {
    this.initDisplayPath();
  }
  public goToEditProject() {
    this.router.navigate(['../../projectManagement/editProject'])
  }
  public goToActivityProject() {
    this.router.navigate(['../../projectManagement/InformationActivity'])
  }
  public goToChartPage() {
    this.router.navigate(['../../projectManagement/chart'])
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت شرکت', false, '');
    this.path2 = new DisplayPathModel('پروفایل شرکت', false, '');
  }

  public setFilterState(state: ProjectState) {
    this.projectStateDisplay = state;
  }

  public changeToPersian(num:string){
    return this.numberFormaterService.covertToFrNumber(num)
  }
}

export enum ProjectState {
  none, inProgress, done
}
