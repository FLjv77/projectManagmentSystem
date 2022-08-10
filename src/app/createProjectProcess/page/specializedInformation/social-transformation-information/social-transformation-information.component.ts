import { projectType } from './../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Router } from '@angular/router';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-transformation-information',
  templateUrl: './social-transformation-information.component.html',
  styleUrls: ['./social-transformation-information.component.scss','../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss',
'../../project-creation-levels/page/basic-project-information/basic-project-information.component.scss']
})
export class SocialTransformationInformationComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public numberFloors = new FormControl();
  public Capacity = new FormControl();
  public numberCamp = new FormControl();
  public budget = new FormControl();
  public numberIntroduction = new FormControl();
  public typeCrime = new FormControl();
  public amountPrisonerGivenFacilities = new FormControl();
  public prisonerBudget = new FormControl();
  public numberElectricalBonds = new FormControl();
  public amountDivorceGivenFacilities = new FormControl();
  public consultantWorkshops = new FormControl();
  public campBudget = new FormControl();
  public numberTargetPatients = new FormControl();
  public numberDrugPackagesSpecificPatients = new FormControl();
  public volumeTreatmentFacilities = new FormControl();
  public numberDrugPackages = new FormControl();
  public packagesCost = new FormControl();
  public typeTools = new FormControl();
  public numberTools = new FormControl();
  public costTools = new FormControl();
  public numberEducationalPackages = new FormControl();
  public costEducational = new FormControl();
  public numberPeopleCovered = new FormControl();
  public numberSubsistencePackages = new FormControl();
  public costSubsistencePackages = new FormControl();
  public numberChildrenCovered = new FormControl();
  public LocationFormControl = new FormControl();
  public number = new FormControl();
  public number1 = new FormControl();
  public number2 = new FormControl();
  public number3 = new FormControl();
  public number4 = new FormControl();
  public arrayList0: Array<string> = ['2223'];
  public arrayList1: Array<string> = ['2223'];
  public arrayList2: Array<string> = ['2223'];
  public arrayList3: Array<string> = ['2223'];
  public arrayList4: Array<string> = ['2223'];
  public arrayList5: Array<string> = ['2223'];
  public arrayList6: Array<string> = ['2223'];
  public arrayList7: Array<string> = ['2223'];
  public arrayList8: Array<string> = ['2223'];
  public select0: boolean = false;
  public select1: boolean = false;
  public select2: boolean = false;
  public select3: boolean = false;
  public select4: boolean = false;
  public select5: boolean = false;
  public select6: boolean = false;
  public select7: boolean = false;
  public select8: boolean = false;
  public typeProject: projectType;

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
      this.numberIntroduction.value &&
      this.campBudget.value &&
      this.numberCamp.value &&
      this.Capacity.value &&
      this.numberFloors.value &&

      this.consultantWorkshops.value &&
      this.amountDivorceGivenFacilities.value &&
      this.numberElectricalBonds.value &&
      this.prisonerBudget.value &&
      this.amountPrisonerGivenFacilities.value &&
      this.typeCrime.value &&
      this.numberDrugPackages.value &&
      this.packagesCost.value &&
      this.typeTools.value &&
      this.number.value &&

      this.numberTools.value &&
      this.costTools.value &&
      this.numberEducationalPackages.value &&
      this.costEducational.value &&
      this.numberPeopleCovered.value &&
      this.numberSubsistencePackages.value &&
      this.costSubsistencePackages.value &&

      this.numberChildrenCovered.value &&
      this.numberDrugPackagesSpecificPatients.value &&
      this.volumeTreatmentFacilities.value &&
      this.numberTargetPatients.value
    ) res = true;
    return res;
  }

  public setTypeProject(state: projectType){
    this.typeProject = state;
  }

  public setProjectSocial(state: number) {
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
    else if (state==4) {
      this.select4 = !this.select4;
    }
    else if (state==5) {
      this.select5 = !this.select5;
    }
    else if (state==6) {
      this.select6 = !this.select6;
    }
    else if (state==7) {
      this.select7 = !this.select7;
    }
    else if (state==8) {
      this.select8 = !this.select8;
    }
  }

  public addList(listName: Array<string>){
    listName.push('222');
  }

}
