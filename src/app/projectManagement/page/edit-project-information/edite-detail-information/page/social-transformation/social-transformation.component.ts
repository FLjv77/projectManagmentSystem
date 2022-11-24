import { AlertDialogBySweetAlertService } from './../../../../../../shared/service/alertDialog/alert-dialog-by-sweet-alert.service';
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
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-social-transformation',
  templateUrl: './social-transformation.component.html',
  styleUrls: ['./social-transformation.component.scss']
})
export class SocialTransformationComponent implements OnInit {
  private projectId : string|null;
  @Input() data: ProjectSelectedDTO;
  @Output() refreshList= new EventEmitter<boolean>();
  @Input() projectIdSelect: string|string[];
  public inputCustomStyle: InputCustomStyle;
  public numberFloors =  new Array<FormControl>();
  public Capacity =  new Array<FormControl>();
  public numberCamp =  new Array<FormControl>();
  public edit: boolean;


  public numberIntroduction = new Array<FormControl>();

  public amountPrisonerGivenFacilities = new Array<FormControl>();
  public prisonerBudget = new Array<FormControl>();
  public numberElectricalBonds = new Array<FormControl>();
  public typeCrime = new Array<FormControl>();

  public amountDivorceGivenFacilities = new FormControl();
  public consultantWorkshops = new FormControl();

  public campBudget =  new Array<FormControl>();

  public numberTargetPatients = new Array<FormControl>();
  public numberDrugPackagesSpecificPatients = new Array<FormControl>();
  public volumeTreatmentFacilities = new Array<FormControl>();

  public numberSubsistencePackages = new Array<FormControl>();
  public costSubsistencePackages = new Array<FormControl>();

  public number1 = new Array<FormControl>();
  public numberEducationalPackages = new Array<FormControl>();
  public costEducational = new Array<FormControl>();
  public numberPeopleCovered = new Array<FormControl>();

  public arrayListAddicion: Array<SocialTransformationAddicion> = new Array<SocialTransformationAddicion>();
  public arrayListBuildingCamp: Array<SocialTransformationCampConstruction> = new Array<SocialTransformationCampConstruction>();
  public arrayListDivorce: SocialTransformationDivorce = new SocialTransformationDivorce();
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
    private activeRoute:ActivatedRoute,
    private alertDialogBySweetAlertService:AlertDialogBySweetAlertService) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.getData();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getData(){
    if (this.data.projectSpeceficDetail.addicions || this.data.projectSpeceficDetail.campConstructions ||
      this.data.projectSpeceficDetail.divorces || this.data.projectSpeceficDetail.unintentionalPrisoners ||
      this.data.projectSpeceficDetail.bannedFromEducations || this.data.projectSpeceficDetail.segmentations ||
      this.data.projectSpeceficDetail.specialPatients) {

      this.arrayListAddicion = this.data.projectSpeceficDetail.addicions;
      this.arrayListBuildingCamp = this.data.projectSpeceficDetail.campConstructions;
      this.arrayListDivorce = this.data.projectSpeceficDetail.divorces;
      this.arrayListUnintentionalPrisoner = this.data.projectSpeceficDetail.unintentionalPrisoners;
      this.arraySocialTransformationBannedFromEducation = this.data.projectSpeceficDetail.bannedFromEducations;
      this.arrayListSocialTransformationSegmentation = this.data.projectSpeceficDetail.segmentations;
      this.arrayListSocialTransformationSpecialPatient = this.data.projectSpeceficDetail.specialPatients;
      this.getarrayListAddicion();
      this.getarrayListBuildingCamp();
      this.getarrayListDivorce();
      this.getarrayListUnintentionalPrisoner();
      this.getarraySocialTransformationBannedFromEducation();
      this.getarrayListSocialTransformationSegmentation();
      this.getarrayListSocialTransformationSpecialPatient();
      if (this.data.projectSpeceficDetail.divorces!=null) {
        this.showDivorce = true;
      }
    }
  }

  public getarrayListAddicion(){
    for (let i = 0; i < this.arrayListAddicion.length; i++) {
      this.numberIntroduction.push(new FormControl());
      this.campBudget.push(new FormControl());

      this.numberIntroduction[i].setValue(this.arrayListAddicion[i].numberOfIntroducingToCamp);
      this.campBudget[i].setValue(this.arrayListAddicion[i].addictionBudget);
    }
  }

  public getarrayListBuildingCamp(){
    for (let i = 0; i < this.arrayListBuildingCamp.length; i++) {
      this.numberFloors.push(new FormControl());
      this.Capacity.push(new FormControl());
      this.numberCamp.push(new FormControl());

      this.numberCamp[i].setValue(this.arrayListBuildingCamp[i].numberOfCamp);
      this.Capacity[i].setValue(this.arrayListBuildingCamp[i].addictedCapacity);
      this.numberFloors[i].setValue(this.arrayListBuildingCamp[i].numberOfFloor);
    }
  }

  public getarrayListDivorce(){
      this.amountDivorceGivenFacilities = new FormControl();
      this.consultantWorkshops = new FormControl();

      this.amountDivorceGivenFacilities.setValue(this.arrayListDivorce.amountOfFacilities);
      this.consultantWorkshops.setValue(this.arrayListDivorce.numberOfConsultationWorkShopn);
  }

  public getarrayListUnintentionalPrisoner(){
    for (let i = 0; i < this.arrayListUnintentionalPrisoner.length; i++) {
      this.typeCrime.push(new FormControl());
      this.amountPrisonerGivenFacilities.push(new FormControl());
      this.prisonerBudget.push(new FormControl());
      this.numberElectricalBonds.push(new FormControl());

      this.typeCrime[i].setValue(this.arrayListUnintentionalPrisoner[i].crimeType);
      this.amountPrisonerGivenFacilities[i].setValue(this.arrayListUnintentionalPrisoner[i].amountOfFacilities);
      this.prisonerBudget[i].setValue(this.arrayListUnintentionalPrisoner[i].cost);
      this.numberElectricalBonds[i].setValue(this.arrayListUnintentionalPrisoner[i].amountOfElectronicFootCuffs);
    }
  }

  public getarraySocialTransformationBannedFromEducation(){
    for (let i = 0; i < this.arraySocialTransformationBannedFromEducation.length; i++) {
      this.numberPeopleCovered.push(new FormControl());
      this.costEducational.push(new FormControl());
      this.numberEducationalPackages.push(new FormControl());

      this.numberPeopleCovered[i].setValue(this.arraySocialTransformationBannedFromEducation[i].coveredPerson);
      this.costEducational[i].setValue(this.arraySocialTransformationBannedFromEducation[i].educationalCost);
      this.numberEducationalPackages[i].setValue(this.arraySocialTransformationBannedFromEducation[i].amountOfEducationalPackage);
    }
  }

  public getarrayListSocialTransformationSegmentation(){
    for (let i = 0; i < this.arrayListSocialTransformationSegmentation.length; i++) {
      this.costSubsistencePackages.push(new FormControl());
      this.numberSubsistencePackages.push(new FormControl());

      this.costSubsistencePackages[i].setValue(this.arrayListSocialTransformationSegmentation[i].costOfPackage);
      this.numberSubsistencePackages[i].setValue(this.arrayListSocialTransformationSegmentation[i].subsitencePackage);
    }
  }

  public getarrayListSocialTransformationSpecialPatient(){
    for (let i = 0; i < this.arrayListSocialTransformationSpecialPatient.length; i++) {
      this.numberDrugPackagesSpecificPatients.push(new FormControl());
      this.volumeTreatmentFacilities.push(new FormControl());
      this.numberTargetPatients.push(new FormControl());

      this.numberDrugPackagesSpecificPatients[i].setValue(this.arrayListSocialTransformationSpecialPatient[i].numberOfDrugPackages);
      this.volumeTreatmentFacilities[i].setValue(this.arrayListSocialTransformationSpecialPatient[i].amountOfMedicineFacilities);
      this.numberTargetPatients[i].setValue(this.arrayListSocialTransformationSpecialPatient[i].numberOfCoveredPatients);
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
        [],
        this.arraySocialTransformationBannedFromEducation,
        this.arrayListSocialTransformationSegmentation,
        [],
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
    this.campBudget.splice(index, 1);
    this.numberIntroduction.splice(index, 1);
  }

  public observeChangeNumberIntroduction(event: string, index: number) {
    this.arrayListAddicion[index].numberOfIntroducingToCamp = Number(event);
  }

  public observeChangeCampBudget(event: string, index: number) {
    this.arrayListAddicion[index].addictionBudget = Number(event);
  }

  public deleteListBuildingCamp(index: number){
    this.arrayListBuildingCamp.splice(index, 1);
    this.numberCamp.splice(index, 1);
    this.Capacity.splice(index, 1);
    this.numberFloors.splice(index, 1);
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
  public showDivorce:boolean=false;
  public deleteListDivorce(){
    this.showDivorce = false;
    // this.amountDivorceGivenFacilities.removeAsyncValidators;
  }

  public addListDivorce(){
    this.showDivorce=true;
    // this.arrayListDivorce = null;
    // this.amountDivorceGivenFacilities = new FormControl();
    // this.consultantWorkshops = new FormControl();

    // this.arrayListDivorce = new SocialTransformationDivorce();
  }
  public observeChange_amountDivorceGivenFacilities(event: string) {
    this.arrayListDivorce.amountOfFacilities = Number(event);
  }
  public observeChange_consultantWorkshops(event: string) {
    this.arrayListDivorce.numberOfConsultationWorkShopn = Number(event);
  }

  public deleteListUnintentionalPrisoner(index: number){
    this.arrayListUnintentionalPrisoner.splice(index, 1);
    this.numberElectricalBonds.splice(index, 1);
    this.prisonerBudget.splice(index, 1);
    this.amountPrisonerGivenFacilities.splice(index, 1);
    this.typeCrime.splice(index, 1);
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
    this.numberEducationalPackages.splice(index, 1);
    this.costEducational.splice(index, 1);
    this.numberPeopleCovered.splice(index, 1);
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
    this.numberSubsistencePackages.splice(index, 1);
    this.costSubsistencePackages.splice(index, 1);
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
    this.numberTargetPatients.splice(index, 1);
    this.numberDrugPackagesSpecificPatients.splice(index, 1);
    this.volumeTreatmentFacilities.splice(index, 1);
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

  public saved(){
    this.editList();
    this.edit = false;
  }

  public editForm(){
    this.edit = true;
  }

  public editList(){
    if (this.checkedNumberFloors()==true && this.checkedCapacity()==true && this.checkedNumberIntroduction()==true
    && this.checkedNumberCamp()==true && this.checkedAmountPrisonerGivenFacilities()==true &&
    this.checkedPrisonerBudget()==true && this.checkedNumberElectricalBonds()==true && this.checkedTypeCrime()==true &&
    this.checkedAmountDivorceGivenFacilities()==true && this.checkedConsultantWorkshops()==true &&
    this.checkedCampBudget()==true && this.checkedNumberTargetPatients()==true &&
    this.checkedNumberDrugPackagesSpecificPatients()==true && this.checkedVolumeTreatmentFacilities()==true &&
    this.checkedNumberSubsistencePackages()==true && this.checkedCostSubsistencePackages()==true &&
    this.checkedNumber1()==true && this.checkedNumberEducationalPackages()==true && this.checkedCostEducational()==true &&
    this.checkedNumberPeopleCovered()==true) {
      let list = new SocialTransformationSpeceficDetailDTO(this.arrayListAddicion,this.arrayListBuildingCamp,
        this.arrayListDivorce,this.arrayListUnintentionalPrisoner,[],this.arraySocialTransformationBannedFromEducation,
        this.arrayListSocialTransformationSegmentation,[],this.arrayListSocialTransformationSpecialPatient)
      this.specializedInformationService.ModifySocialTransformationSpeceficDetail1(this.projectIdSelect,list).
      subscribe((res: ApiResult<SocialTransformationSpeceficDetailDTO>)=>{
        console.log(res.data);
        this.arrayListAddicion = res.data.addicions;
        this.arrayListBuildingCamp = res.data.campConstructions;
        this.arrayListDivorce = res.data.divorces;
        this.arrayListUnintentionalPrisoner = res.data.unintentionalPrisoners;
        this.arraySocialTransformationBannedFromEducation = res.data.bannedFromEducations;
        this.arrayListSocialTransformationSegmentation = res.data.segmentations;
        this.arrayListSocialTransformationSpecialPatient = res.data.specialPatients;

      })
    }
    else{
      this.alertDialogBySweetAlertService.showErrorAlert('تمامی فیلد ها رو پرکنید')
    }
  }

  public checkedNumberFloors(): any{
    let res : boolean = true;
    console.log(this.numberFloors);

    for (let i = 0; i < this.numberFloors.length; i++) {
      if (this.numberFloors[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedCapacity(): any{
    let res : boolean = true;
    console.log(this.Capacity);

    for (let i = 0; i < this.Capacity.length; i++) {
      if (this.Capacity[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedNumberCamp(): any{
    let res : boolean = true;
    console.log(this.numberCamp);

    for (let i = 0; i < this.numberCamp.length; i++) {
      if (this.numberCamp[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedNumberIntroduction(): any{
    let res : boolean = true;
    console.log(this.numberIntroduction);

    for (let i = 0; i < this.numberIntroduction.length; i++) {
      if (this.numberIntroduction[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedAmountPrisonerGivenFacilities(): any{
    let res : boolean = true;
    console.log(this.amountPrisonerGivenFacilities);

    for (let i = 0; i < this.amountPrisonerGivenFacilities.length; i++) {
      if (this.amountPrisonerGivenFacilities[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedPrisonerBudget(): any{
    let res : boolean = true;
    console.log(this.prisonerBudget);

    for (let i = 0; i < this.prisonerBudget.length; i++) {
      if (this.prisonerBudget[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedNumberElectricalBonds(): any{
    let res : boolean = true;
    console.log(this.numberElectricalBonds);

    for (let i = 0; i < this.numberElectricalBonds.length; i++) {
      if (this.numberElectricalBonds[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedTypeCrime(): any{
    let res : boolean = true;
    console.log(this.typeCrime);

    for (let i = 0; i < this.typeCrime.length; i++) {
      if (this.typeCrime[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedAmountDivorceGivenFacilities(): any{
    let res : boolean = true;
    if (this.amountDivorceGivenFacilities.value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
      return res;
  }

  public checkedConsultantWorkshops(): any{
    let res : boolean = true;
    console.log(this.consultantWorkshops);

      if (this.consultantWorkshops.value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
    }
    return res;
  }

  public checkedCampBudget(): any{
    let res : boolean = true;
    console.log(this.campBudget);

    for (let i = 0; i < this.campBudget.length; i++) {
      if (this.campBudget[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedNumberTargetPatients(): any{
    let res : boolean = true;
    console.log(this.numberTargetPatients);

    for (let i = 0; i < this.numberTargetPatients.length; i++) {
      if (this.numberTargetPatients[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedNumberDrugPackagesSpecificPatients(): any{
    let res : boolean = true;
    console.log(this.numberDrugPackagesSpecificPatients);

    for (let i = 0; i < this.numberDrugPackagesSpecificPatients.length; i++) {
      if (this.numberDrugPackagesSpecificPatients[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedVolumeTreatmentFacilities(): any{
    let res : boolean = true;
    console.log(this.volumeTreatmentFacilities);

    for (let i = 0; i < this.volumeTreatmentFacilities.length; i++) {
      if (this.volumeTreatmentFacilities[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedNumberSubsistencePackages(): any{
    let res : boolean = true;
    console.log(this.numberSubsistencePackages);

    for (let i = 0; i < this.numberSubsistencePackages.length; i++) {
      if (this.numberSubsistencePackages[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedCostSubsistencePackages(): any{
    let res : boolean = true;
    console.log(this.costSubsistencePackages);

    for (let i = 0; i < this.costSubsistencePackages.length; i++) {
      if (this.costSubsistencePackages[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedNumber1(): any{
    let res : boolean = true;
    console.log(this.number1);

    for (let i = 0; i < this.number1.length; i++) {
      if (this.number1[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedNumberEducationalPackages(): any{
    let res : boolean = true;
    console.log(this.numberEducationalPackages);

    for (let i = 0; i < this.numberEducationalPackages.length; i++) {
      if (this.numberEducationalPackages[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedCostEducational(): any{
    let res : boolean = true;
    console.log(this.costEducational);

    for (let i = 0; i < this.costEducational.length; i++) {
      if (this.costEducational[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedNumberPeopleCovered(): any{
    let res : boolean = true;
    console.log(this.numberPeopleCovered);

    for (let i = 0; i < this.numberPeopleCovered.length; i++) {
      if (this.numberPeopleCovered[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

}
