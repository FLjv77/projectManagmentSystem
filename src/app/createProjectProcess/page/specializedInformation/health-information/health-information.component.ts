import { ActivatedRoute } from '@angular/router';
import { ConstructionTypestring } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { projectType } from './../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Router } from '@angular/router';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { HealthBathroom, HealthHealthHouse, HealthHospital, HealthInsurance, HealthMedicine, HealthPharmacy, HealthSpeceficDetailDTO, HealthToilet, HealthTreatment, HealthVaccination } from 'src/app/createProjectProcess/model/specializedInformation/modifyGetHealthSpeceficDetail';
import { ApiResult } from '../../../../auth/model/authDTO';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { CompanySelectedDTO } from 'src/app/workSpace/model/companyModel';
import { url } from 'src/assets/url/url';

@Component({
  selector: 'app-health-information',
  templateUrl: './health-information.component.html',
  styleUrls: ['./health-information.component.scss', '../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss',
  '../specialized-information-rural-housing/specialized-information-rural-housing.component.scss',
  '../../project-creation-levels/page/basic-project-information/basic-project-information.component.scss']
})
export class HealthInformationComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public numberOfPeopleCoveredByInsurance = new Array<FormControl>();
  public numberpharmacy = new Array<FormControl>();
  public numberBathroom= new Array<FormControl>();
  public numberWC= new Array<FormControl>();

  public TypeOfDisease= new Array<FormControl>();
  public NumberOfTreatments= new Array<FormControl>();

  public typeOfMedicine= new Array<FormControl>();
  public numberOfMedicine= new Array<FormControl>();

  public LocationFormControl= new FormControl();
  public numberVaccination= new Array<FormControl>();

  public NumberOfFloors = new Array<FormControl>();
  public numberOfBedsHospital = new Array<FormControl>();
  public numberHospital = new Array<FormControl>();

  public numberHealthHome = new Array<FormControl>();
  public Meterage= new Array<FormControl>();
  public numberOfBedsHealthHouse= new Array<FormControl>();
  public numberNurses= new Array<FormControl>();
  public numberDoctors= new Array<FormControl>();

  public medicineList: Array<HealthMedicine> = new Array<HealthMedicine>();
  public diseaseList: Array<HealthTreatment> = new Array<HealthTreatment>();
  public insuranceList: Array<HealthInsurance> = new Array<HealthInsurance>();
  public HealthHomeList: Array<HealthHealthHouse> = new Array<HealthHealthHouse>();
  public healthPharmacyList: Array<HealthPharmacy> = new Array<HealthPharmacy>();
  public bathRoomList: Array<HealthBathroom> = new Array<HealthBathroom>();
  public WCList: Array<HealthToilet> = new Array<HealthToilet>();
  public HealthVaccinationList: Array<HealthVaccination> = new Array<HealthVaccination>();

  public typeProject: projectType;
  public select0: boolean = false;
  public select1: boolean = false;
  public select2: boolean = false;
  public select3: boolean = false;
  public select4: boolean = false;
  public select5: boolean = false;
  public select6: boolean = false;
  public select7: boolean = false;
  public select8: boolean = false;
  public projectId: string|null;

  public hospitalList: Array<HealthHospital> = new Array<HealthHospital>();

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
  private getQuery(){
    this.projectId = this.activeRoute.snapshot.queryParamMap.get("projectId");
  }

  public createProjectDetail() {
    this.specializedInformationService.ModifyGetHealthSpeceficDetail(
      this.projectId,
      new HealthSpeceficDetailDTO(
        this.hospitalList,
        this.HealthHomeList,
        this.insuranceList,
        this.healthPharmacyList,
        this.bathRoomList,
        this.WCList,
        this.HealthVaccinationList,
        this.diseaseList,
        this.medicineList
      )
    ).subscribe((res: ApiResult<HealthSpeceficDetailDTO>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.router.navigate(['../projectManagement/projectList'] , {queryParams: {idCompany : this.companyId}});

      }
    });
  }

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }

  public checkValidation(): boolean {
    let res = true;
    /*
    if(this.NumberOfFloors.value
      && this.numberOfBedsHospital.value
      && this.Meterage.value
      && this.numberOfBedsHealthHouse.value
      && this.numberDoctors.value
      && this.numberNurses.value
      && this.numberBathroom.value
      && this.numberWC.value
      && this.numberpharmacy.value
      && this.numberOfPeopleCoveredByInsurance.value

      && this.NumberOfTreatments.value
      && this.TypeOfDisease.value
      && this.numberOfMedicine.value
      && this.typeOfMedicine.value
      && this.numberVaccination.value
      && this.numberHealthHome.value
      && this.numberHospital.value
      ) res = true;
*/
    return res;
  }

  public setTypeProject(state: projectType){
    this.typeProject = state;
  }

  public setProjectRuralWaterArea(state: number) {
    if (state==0) {
      this.select0 = !this.select0;
      this.hospitalList = new Array<HealthHospital>();
      this.addHospital();
    }
    else if (state==1) {
      this.select1 = !this.select1;
      this.HealthHomeList = new Array<HealthHealthHouse>();
      this.addHealthHome();
    }
    else if (state==2) {
      this.select2 = !this.select2;
      this.insuranceList = new Array<HealthInsurance>();
      this.addInsuranceList();
    }
    else if (state==3) {
      this.select3 = !this.select3;
      this.healthPharmacyList = new Array<HealthPharmacy>();
      this.addHealthPharmacyList();
    }
    else if (state==4) {
      this.select4 = !this.select4;
      this.bathRoomList = new Array<HealthBathroom>();
      this.addHealthBathroom();
    }
    else if (state==5) {
      this.select5 = !this.select5;
      this.WCList = new Array<HealthToilet>();
      this.addHealthToilet();
    }
    else if (state==6) {
      this.select6 = !this.select6;
      this.HealthVaccinationList = new Array<HealthVaccination>();
      this.addHealthVaccination();
    }
    else if (state==7) {
      this.select7 = !this.select7;
      this.diseaseList = new Array<HealthTreatment>();
      this.addHealthTreatment();
    }
    else if (state==8) {
      this.select8 = !this.select8;
      this.medicineList = new Array<HealthMedicine>();
      this.addHealthMedicine();
    }
  }

  public addHospital(){
    this.NumberOfFloors.push(new FormControl());
    this.numberOfBedsHospital.push(new FormControl());
    this.numberHospital.push(new FormControl());

    this.hospitalList.push(new HealthHospital());
  }

  public deleteListHealthHospital(index: number){
    this.hospitalList.splice(index, 1);
  }

  public observeChange_NumberOfFloors(event: string, index: number) {
    this.hospitalList[index].countOfFloors = Number(event);
  }

  public observeChange_numberOfBedsHospital(event: string, index: number) {
    this.hospitalList[index].countOfBeds = Number(event);
  }

  public observeChange_numberHospital(event: string, index: number) {
    this.hospitalList[index].numberofHospital = Number(event);
  }

  public set_type_numberHospital(constructionType: ConstructionTypestring, index: number) {
    this.hospitalList[index].constructionType = constructionType;
  }

  public set_type_HealthHomeList(constructionType: ConstructionTypestring, index: number) {
    this.HealthHomeList[index].constructionType = constructionType;
  }

  public addHealthHome(){
    this.HealthHomeList.push(new HealthHealthHouse());

    this.numberHealthHome.push(new FormControl());
    this.Meterage.push(new FormControl());
    this.numberOfBedsHealthHouse.push(new FormControl());
    this.numberNurses.push(new FormControl());
    this.numberDoctors.push(new FormControl());
  }

  public deleteHealthHome(index: number){
    this.HealthHomeList.splice(index, 1);
  }

  public observeChange_numberHealthHome(event: string, index: number) {
    this.HealthHomeList[index].numberOfHealthHouse = Number(event);
  }

  public observeChange_Meterage(event: string, index: number) {
    this.HealthHomeList[index].meterage = Number(event);
  }

  public observeChange_numberOfBedsHealthHouse(event: string, index: number) {
    this.HealthHomeList[index].numberOfBeds = Number(event);
  }

  public observeChange_numberNurses(event: string, index: number) {
    this.HealthHomeList[index].numberOfNurse = Number(event);
  }

  public observeChange_numberDoctors(event: string, index: number) {
    this.HealthHomeList[index].numberOfDoctor = Number(event);
  }

  public addInsuranceList(){
    this.insuranceList.push(new HealthInsurance());

    this.numberOfPeopleCoveredByInsurance.push(new FormControl());
  }

  public deleteInsuranceList(index: number){
    this.insuranceList.splice(index, 1);
  }

  public observeChange_numberOfPeopleCoveredByInsurance(event: string, index: number) {
    this.insuranceList[index].numberOfPeopleCoveredByInsurance = Number(event);
  }

  public addHealthPharmacyList(){
    this.healthPharmacyList.push(new HealthPharmacy());
    this.numberpharmacy.push(new FormControl());
    this.numberOfPeopleCoveredByInsurance.push(new FormControl());
  }

  public deletehealthPharmacyList(index: number){
    this.healthPharmacyList.splice(index, 1);
  }

  public observeChange_numberpharmacy(event: string, index: number) {
    this.healthPharmacyList[index].numberOfPharmacy = Number(event);
  }

  public addHealthBathroom(){
    this.bathRoomList.push(new HealthBathroom());
    this.numberBathroom.push(new FormControl());
  }

  public deleteHealthBathroomList(index: number){
    this.bathRoomList.splice(index, 1);
  }

  public observeChange_numberBathroom(event: string, index: number) {
    this.bathRoomList[index].numberOfBathroom = Number(event);
  }

  public addHealthToilet(){
    this.WCList.push(new HealthToilet());
    this.numberWC.push(new FormControl());
  }

  public deleteHealthToiletList(index: number){
    this.WCList.splice(index, 1);
  }

  public observeChange_numberWC(event: string, index: number) {
    this.WCList[index].numberOfToilet = Number(event);
  }

  public addHealthVaccination(){
    this.HealthVaccinationList.push(new HealthVaccination());
    this.numberVaccination.push(new FormControl());
  }

  public deleteHealthVaccination(index: number){
    this.HealthVaccinationList.splice(index, 1);
  }

  public observeChange_numberVaccination(event: string, index: number) {
    this.HealthVaccinationList[index].numberOfVaccination = Number(event);
  }

  public addHealthTreatment(){
    this.diseaseList.push(new HealthTreatment());
    this.TypeOfDisease.push(new FormControl());
    this.NumberOfTreatments.push(new FormControl());
  }

  public deleteHealthTreatment(index: number){
    this.diseaseList.splice(index, 1);
  }

  public observeChange_NumberOfTreatments(event: string, index: number) {
    this.diseaseList[index].numberOftTreatment = event;
  }

  public observeChange_TypeOfDisease(event: string, index: number) {
    this.diseaseList[index].typeOfDisease = event;
  }



  public addHealthMedicine(){
    this.medicineList.push(new HealthMedicine());

    this.numberOfMedicine.push(new FormControl());
    this.typeOfMedicine.push(new FormControl());
  }

  public deleteHealthMedicine(index: number){
    this.medicineList.splice(index, 1);
  }

  public observeChange_typeOfMedicine(event: string, index: number) {
    this.medicineList[index].typeOfMedicine = event;
  }

  public observeChange_numberOfMedicine(event: string, index: number) {
    this.medicineList[index].countOfMedicine = event;
  }
}
export class heahthList{
  name : string;
  number : string;
}

