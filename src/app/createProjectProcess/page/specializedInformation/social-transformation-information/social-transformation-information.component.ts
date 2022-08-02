import { Router } from '@angular/router';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-transformation-information',
  templateUrl: './social-transformation-information.component.html',
  styleUrls: ['./social-transformation-information.component.scss','../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss']
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
}
