import { ActivatedRoute } from '@angular/router';
import { projectType } from './../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Router } from '@angular/router';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SocialTransformationAddicion, SocialTransformationBannedFromEducation, SocialTransformationCampConstruction, SocialTransformationDivorce, SocialTransformationSegmentation, SocialTransformationSpeceficDetailDTO, SocialTransformationSpecialPatient, SocialTransformationUnintentionalPrisoner } from 'src/app/createProjectProcess/model/specializedInformation/modifySocialTransformationSpeceficDetail';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { ApiResult } from '../../../../auth/model/authDTO';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { url } from '../../../../../../dist/comprehensiveProjectManagement/assets/url/url';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';

@Component({
  selector: 'app-social-transformation-information',
  templateUrl: './social-transformation-information.component.html',
  styleUrls: ['./social-transformation-information.component.scss','../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss',
'../../project-creation-levels/page/basic-project-information/basic-project-information.component.scss']
})
export class SocialTransformationInformationComponent implements OnInit {
  private projectId : string|null;

  public inputCustomStyle: InputCustomStyle;
  public numberFloors =  new Array<FormControl>();
  public Capacity =  new Array<FormControl>();
  public numberCamp =  new Array<FormControl>();

  public budget = new FormControl();
  public numberIntroduction = new Array<FormControl>();

  public amountPrisonerGivenFacilities = new Array<FormControl>();
  public prisonerBudget = new Array<FormControl>();
  public numberElectricalBonds = new Array<FormControl>();
  public typeCrime = new Array<FormControl>();

  public amountDivorceGivenFacilities = new Array<FormControl>();
  public consultantWorkshops = new Array<FormControl>();

  public campBudget =  new Array<FormControl>();

  public numberTargetPatients = new Array<FormControl>();
  public numberDrugPackagesSpecificPatients = new Array<FormControl>();
  public volumeTreatmentFacilities = new Array<FormControl>();

  public numberDrugPackages = new FormControl();
  public packagesCost = new FormControl();
  public typeTools = new FormControl();
  public numberTools = new FormControl();
  public costTools = new FormControl();
  public numberChildrenCovered = new FormControl();

  public numberSubsistencePackages = new Array<FormControl>();
  public costSubsistencePackages = new Array<FormControl>();

  public number1 = new Array<FormControl>();
  public numberEducationalPackages = new Array<FormControl>();
  public costEducational = new Array<FormControl>();
  public numberPeopleCovered = new Array<FormControl>();

  public number = new FormControl();
  public number2 = new FormControl();
  public number3 = new FormControl();
  public number4 = new FormControl();
  public arrayListAddicion: Array<SocialTransformationAddicion> = new Array<SocialTransformationAddicion>();
  public arrayListBuildingCamp: Array<SocialTransformationCampConstruction> = new Array<SocialTransformationCampConstruction>();
  public arrayListDivorce: Array<SocialTransformationDivorce> = new Array<SocialTransformationDivorce>();
  public arrayListUnintentionalPrisoner: Array<SocialTransformationUnintentionalPrisoner> = new Array<SocialTransformationUnintentionalPrisoner>();
  public arraySocialTransformationBannedFromEducation: Array<SocialTransformationBannedFromEducation> = new Array<SocialTransformationBannedFromEducation>();
  public arrayListSocialTransformationSegmentation: Array<SocialTransformationSegmentation> = new Array<SocialTransformationSegmentation>();
  public arrayListSocialTransformationSpecialPatient: Array<SocialTransformationSpecialPatient> = new Array<SocialTransformationSpecialPatient>;


  public arrayList4: Array<string> = ['2223'];
  public arrayList7: Array<string> = ['2223'];
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

  constructor(private router:Router,
    private commonDataForCreateProjectService: CommonDataForCreateProjectService,
    private specializedInformationService: SpecializedInformationService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.getQuery();
    this.setCompanyId();
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

  private companyId: string;
  private setCompanyId() {
    let com = localStorage.getItem(url.CompanyInfo);
    if(com) {
      let c = new CompanySelectedDTO();
      c = JSON.parse(com);
      this.companyId = c.companyId;
    } else {
      let idC = this.activeRoute.snapshot.queryParamMap.get('companyId');
      if(idC) this.companyId = idC;
    }
  }

  public SetDetailInformation() {
    this.specializedInformationService.ModifySocialTransformationSpeceficDetail(
      this.projectId,
      new SocialTransformationSpeceficDetailDTO(
        this.arrayListAddicion,
        this.arrayListBuildingCamp,
        this.arrayListDivorce,
        this.arrayListUnintentionalPrisoner,
        this.arraySocialTransformationBannedFromEducation,
        this.arrayListSocialTransformationSegmentation,
        this.arrayListSocialTransformationSpecialPatient
      )
    ).subscribe((res: ApiResult<SocialTransformationSpeceficDetailDTO>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.router.navigate(['../projectManagement/projectList'] , {queryParams: {idCompany : this.companyId}});

      }
    });
  }

  public checkValidation(): boolean {
    let res = true;
    /*
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

    */
    return res;
  }

  public setTypeProject(state: projectType){
    this.typeProject = state;
  }

  public setProjectSocial(state: number) {
    if (state==0) {
      this.select0 = !this.select0;
      this.addListAddicion();
    }
    else if (state==1) {
      this.select1 = !this.select1;
      this.addListBuildingCamp();
    }
    else if (state==2) {
      this.select2 = !this.select2;
      this.addListDivorce();
    }
    else if (state==3) {
      this.select3 = !this.select3;
      this.addListUnintentionalPrisoner();
    }
    else if (state==4) {
      this.select4 = !this.select4;
    }
    else if (state==5) {
      this.select5 = !this.select5;
      this.addListSocialTransformationBannedFromEducation();
    }
    else if (state==6) {
      this.select6 = !this.select6;
      this.addListSocialTransformationSegmentation();
    }
    else if (state==7) {
      this.select7 = !this.select7;
    }
    else if (state==8) {
      this.select8 = !this.select8;
      this.addListSocialTransformationSpecialPatient();
    }
  }


  public addListAddicion(){
    this.campBudget.push(new FormControl());
    this.numberIntroduction.push(new FormControl());

    this.arrayListAddicion.push(new SocialTransformationAddicion());
  }

  public deleteListAddicion(index: number){
    this.arrayListAddicion.splice(index, 1);
  }

  public observeChangeNumberIntroduction(event: string, index: number) {
    this.arrayListAddicion[index].numberOfIntroducingToCamp = Number(event);
  }

  public observeChangeCampBudget(event: string, index: number) {
    this.arrayListAddicion[index].addictionBudget = Number(event);
  }

  public deleteListBuildingCamp(index: number){
    this.arrayListBuildingCamp.splice(index, 1);
  }

  public addListBuildingCamp(){
    this.numberCamp.push(new FormControl());
    this.Capacity.push(new FormControl());
    this.numberFloors.push(new FormControl());

    this.arrayListBuildingCamp.push(new SocialTransformationCampConstruction());
  }

  public observeChange_numberCamp(event: string, index: number) {
    this.arrayListBuildingCamp[index].numberOfCamp = Number(event);
  }

  public observeChange_Capacity(event: string, index: number) {
    this.arrayListBuildingCamp[index].addictedCapacity = Number(event);
  }

  public observeChange_numberFloors(event: string, index: number) {
    this.arrayListBuildingCamp[index].numberOfFloor = Number(event);
  }

  public deleteListDivorce(index: number){
    this.arrayListDivorce.splice(index, 1);
  }

  public addListDivorce(){
    this.amountDivorceGivenFacilities.push(new FormControl());
    this.consultantWorkshops.push(new FormControl());

    this.arrayListDivorce.push(new SocialTransformationDivorce());
  }
  public observeChange_amountDivorceGivenFacilities(event: string, index: number) {
    this.arrayListDivorce[index].amountOfFacilities = Number(event);
  }
  public observeChange_consultantWorkshops(event: string, index: number) {
    this.arrayListDivorce[index].numberOfConsultationWorkShopn = Number(event);
  }

  public deleteListUnintentionalPrisoner(index: number){
    this.arrayListUnintentionalPrisoner.splice(index, 1);
  }

  public addListUnintentionalPrisoner() {
    this.numberElectricalBonds.push(new FormControl());
    this.prisonerBudget.push(new FormControl());
    this.amountPrisonerGivenFacilities.push(new FormControl());
    this.typeCrime.push(new FormControl());

    this.arrayListUnintentionalPrisoner.push(new SocialTransformationUnintentionalPrisoner());
  }

  public observeChange_amountPrisonerGivenFacilities(event: string, index: number) {
    this.arrayListUnintentionalPrisoner[index].amountOfFacilities = Number(event);
  }

  public observeChange_prisonerBudget(event: string, index: number) {
    this.arrayListUnintentionalPrisoner[index].cost = event;
  }
  public observeChange_numberElectricalBonds(event: string, index: number) {
    this.arrayListUnintentionalPrisoner[index].amountOfElectronicFootCuffs = Number(event);
  }
  public observeChange_typeCrime(event: string, index: number) {
    this.arrayListUnintentionalPrisoner[index].crimeType = event;
  }


  public deleteListSocialTransformationBannedFromEducation(index: number){
    this.arraySocialTransformationBannedFromEducation.splice(index, 1);
  }

  public addListSocialTransformationBannedFromEducation() {
    this.numberEducationalPackages.push(new FormControl());
    this.costEducational.push(new FormControl());
    this.numberPeopleCovered.push(new FormControl());

    this.arraySocialTransformationBannedFromEducation.push(new SocialTransformationBannedFromEducation());
  }

  public observeChange_numberEducationalPackages(event: string, index: number) {
    this.arraySocialTransformationBannedFromEducation[index].amountOfEducationalPackage = Number(event);
  }

  public observeChange_costEducational(event: string, index: number) {
    this.arraySocialTransformationBannedFromEducation[index].educationalCost = Number(event);
  }

  public observeChange_numberPeopleCovered(event: string, index: number) {
    this.arraySocialTransformationBannedFromEducation[index].coveredPerson = Number(event);
  }

  public deleteListSocialTransformationSegmentation(index: number){
    this.arrayListSocialTransformationSegmentation.splice(index, 1);
  }

  public addListSocialTransformationSegmentation() {
    this.numberSubsistencePackages.push(new FormControl());
    this.costSubsistencePackages.push(new FormControl());

    this.arrayListSocialTransformationSegmentation.push(new SocialTransformationSegmentation());
  }

  public observeChange_numberSubsistencePackages(event: string, index: number) {
    this.arrayListSocialTransformationSegmentation[index].subsitencePackage = Number(event);
  }

  public observeChange_costSubsistencePackages(event: string, index: number) {
    this.arrayListSocialTransformationSegmentation[index].costOfPackage = Number(event);
  }

  public deleteListSocialTransformationSpecialPatient(index: number){
    this.arrayListSocialTransformationSpecialPatient.splice(index, 1);
  }

  public addListSocialTransformationSpecialPatient() {
    this.numberTargetPatients.push(new FormControl());
    this.numberDrugPackagesSpecificPatients.push(new FormControl());
    this.volumeTreatmentFacilities.push(new FormControl());

    this.arrayListSocialTransformationSpecialPatient.push(new SocialTransformationSpecialPatient());
  }

  public observeChange_numberTargetPatients(event: string, index: number) {
    this.arrayListSocialTransformationSpecialPatient[index].numberOfCoveredPatients = Number(event);
  }

  public observeChange_numberDrugPackagesSpecificPatients(event: string, index: number) {
    this.arrayListSocialTransformationSpecialPatient[index].numberOfDrugPackages = Number(event);
  }

  public observeChange_volumeTreatmentFacilities(event: string, index: number) {
    this.arrayListSocialTransformationSpecialPatient[index].amountOfMedicineFacilities = Number(event);
  }
}
