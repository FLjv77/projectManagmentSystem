import { ActivatedRoute } from '@angular/router';
import { projectType } from './../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {DisplayPathModel} from "../../../../shared/model/displayPathModel";

@Component({
  selector: 'app-specialized-information-removal-marginalization',
  templateUrl: './specialized-information-removal-marginalization.component.html',
  styleUrls: ['./specialized-information-removal-marginalization.component.scss',
    '../../project-creation-levels/project-creation-levels.component.scss',
  '../../project-creation-levels/page/basic-project-information/basic-project-information.component.scss']
})
export class SpecializedInformationRemovalMarginalizationComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public numberMosques = new FormControl();
  public meterageMosques = new FormControl();
  public meterageSchool = new FormControl();
  public numberClass = new FormControl();
  public estimatedNumberOfStudents = new FormControl();
  public meteragePark = new FormControl();
  public NumberOfFloors = new FormControl();
  public meterageClinic = new FormControl();
  public numberDoctors = new FormControl();
  public numberPark = new FormControl();
  public numberClinic = new FormControl();
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  public typeProject: projectType;
  public arrayList0: Array<string> = ['2223'];
  public arrayList1: Array<string> = ['2223'];
  public arrayList2: Array<string> = ['2223'];
  public arrayList3: Array<string> = ['2223'];
  public select0: boolean = false;
  public select1: boolean = false;
  public select2: boolean = false;
  public select3: boolean = false;
  private projectId: string|null;

  constructor(private router:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.initDisplayPath();
    this.getQuery();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private getQuery(){
    this.projectId = this.activeRoute.snapshot.queryParamMap.get("projectId");
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('ساخت پروژه', false, '');
    this.path3 = new DisplayPathModel('شناسه تخصصی', false, '');
  }

  public checkValidation(): boolean {
    let res = false;
    if(
      this.numberMosques.value &&
      this.numberMosques.value &&
      this.meterageMosques.value &&
      this.meterageSchool.value &&
      this.numberClass.value &&
      this.estimatedNumberOfStudents.value &&
      this.meteragePark.value &&
      this.NumberOfFloors.value &&
      this.meterageClinic.value &&
      this.numberDoctors.value

    ) res = true;
    return res;
  }

  public setTypeProject(state: projectType){
    this.typeProject = state;
  }

  public addList(listName: Array<string>){
    listName.push('222');
  }

  public setProjectMarginalization(state: number) {
    if (state==0) {
      this.select0 = !this.select0;
    }
    else if (state==1) {
      this.select1 = !this.select1;
    }
    else if (state==2) {
      this.select2 = !this.select2;
    }
    else if (state==3) {
      this.select3 = !this.select3;
    }
  }

  public deleteList(list: Array<string>,index: number){
    list.splice(index, 1);
  }
}
