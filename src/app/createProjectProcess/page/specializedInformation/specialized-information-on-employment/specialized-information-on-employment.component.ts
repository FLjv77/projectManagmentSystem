import { ActivatedRoute } from '@angular/router';
import { projectType } from './../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialized-information-on-employment',
  templateUrl: './specialized-information-on-employment.component.html',
  styleUrls: ['./specialized-information-on-employment.component.scss','../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss',
'../../project-creation-levels/page/basic-project-information/basic-project-information.component.scss']
})
export class SpecializedInformationOnEmploymentComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public workshopName = new FormControl();
  public workshopType = new FormControl();
  public numberPeopleWorkshop = new FormControl();
  public EducationCenterName = new FormControl();
  public EducationCenterType = new FormControl();
  public numberPeopleEducationCenter = new FormControl();
  public amount = new FormControl();
  public number = new FormControl();
  public reason = new FormControl();
  public LocationFormControl = new FormControl();
  public numberWorkshop = new FormControl();
  public numberEducationCenter = new FormControl();
  public typeProject: projectType;
  public select0: boolean = false;
  public select1: boolean = false;
  public select2: boolean = false;
  public arrayList0: Array<string> = ['2223'];
  public arrayList1: Array<string> = ['2223'];
  public arrayList2: Array<string> = ['2223'];
  private projectId: string|null;

  constructor(private router:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.initInputStyle();
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

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }

  public checkValidation(): boolean {
    let res = false;
    if(
      this.workshopName.value &&
      this.workshopType.value &&
      this.numberPeopleWorkshop.value &&
      this.EducationCenterName.value &&
      this.EducationCenterType.value &&
      this.numberPeopleEducationCenter.value &&
      this.amount.value &&
      this.number.value &&
      this.reason.value
    ) res = true;
    return res;
  }

  public setTypeProject(state: projectType){
    this.typeProject = state;
  }

  public setProjectEmployment(state: number) {
    if (state==0) {
      this.select0 = !this.select0;
    }
    else if (state==1) {
      this.select1 = !this.select1;
    }
    else if (state==2) {
      this.select2 = !this.select2;
    }
  }

  public addList(listName: Array<string>){
    listName.push('222');
  }

  public deleteList(list:Array<string>, index: number){
    list.splice(index, 1);
  }
}
