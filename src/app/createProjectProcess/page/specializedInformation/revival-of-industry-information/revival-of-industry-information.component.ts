import { projectType } from './../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revival-of-industry-information',
  templateUrl: './revival-of-industry-information.component.html',
  styleUrls: ['./revival-of-industry-information.component.scss','../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss',
  '../../project-creation-levels/page/basic-project-information/basic-project-information.component.scss']
})
export class RevivalOfIndustryInformationComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public amountGrantedFacilities = new FormControl();
  public numberIndustries = new FormControl();
  public LocationFormControl = new FormControl();
  public typeProject: projectType;
  public arrayList: Array<string> = ['2223'];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }



  public checkValidation(): boolean {
    let res = false;
    if(
      this.amountGrantedFacilities.value &&
      this.numberIndustries.value
    ) res = true;
    return res;
  }

  public setTypeProject(state: projectType){
    this.typeProject = state;
  }

  public addList(){
    this.arrayList.push('222');
  }

  public deleteList(index: number){
    this.arrayList.splice(index, 1);
  }

}
