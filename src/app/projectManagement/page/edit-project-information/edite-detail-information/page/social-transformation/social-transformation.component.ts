import { ConstructionTypestring } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { ProjectSelectedDTO } from './../../../../../model/project/projectDto';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ActivatedRoute } from '@angular/router';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { Router } from '@angular/router';
import { projectType } from './../../../../../../createProjectProcess/model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { SocialTransformationAddicion, SocialTransformationCampConstruction, SocialTransformationDivorce, SocialTransformationUnintentionalPrisoner, SocialTransformationSegmentation, SocialTransformationSpecialPatient, SocialTransformationBannedFromEducation, SocialTransformationSpeceficDetailDTO } from 'src/app/createProjectProcess/model/specializedInformation/modifySocialTransformationSpeceficDetail';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-transformation',
  templateUrl: './social-transformation.component.html',
  styleUrls: ['./social-transformation.component.scss']
})
export class SocialTransformationComponent implements OnInit {
  private projectId : string|null;
  @Input() data: ProjectSelectedDTO;
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
  public typeProject: projectType;

  constructor(private router:Router,
    private commonDataForCreateProjectService: CommonDataForCreateProjectService,
    private specializedInformationService: SpecializedInformationService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.addList();
    this.getData();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getData(){
    if (this.data) {
      // this.ruralRoadList = this.data.projectSpeceficDetail.ruralRoads;
      // console.log(this.ruralRoadList.length);
      // for (let i = 0; i < this.ruralRoadList.length; i++) {
      //   this.roadWidth[i].setValue(this.ruralRoadList[i].roadWidth);    
      //   this.roadLength[i].setValue(this.ruralRoadList[i].roadLength);    
      // }
    }
  }

  public setValue(state: ConstructionTypestring,index:number): boolean {
    let res = false;
    // if(this.ruralRoadList) {
    //   if(this.ruralRoadList[index].constructionType == state) res = true;
    // }
    return res;
  }

  public addList(){
    this.addListAddicion();
    this.addListBuildingCamp();
    this.addListDivorce();
    this.addListSocialTransformationBannedFromEducation();
    this.addListSocialTransformationSegmentation();
    this.addListSocialTransformationSpecialPatient();
    this.addListUnintentionalPrisoner();
  }

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
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
        setTimeout(() => {
          document.getElementById('stackHolderInformation')?.click();
        }, 200);
      }
    });
  }

  public setTypeProject(state: projectType){
    this.typeProject = state;
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
