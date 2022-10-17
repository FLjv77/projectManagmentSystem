import { threadId } from 'worker_threads';
import { ProjectSelectedDTO } from './../../../../../model/project/projectDto';
import { InputCustomStyle } from './../../../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { ConstructionTypestring } from './../../../../../../createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { HealthMedicine, HealthHealthHouse, HealthInsurance, HealthTreatment, HealthPharmacy, HealthBathroom, HealthVaccination, HealthToilet, HealthHospital } from './../../../../../../createProjectProcess/model/specializedInformation/modifyGetHealthSpeceficDetail';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  @Input() data: ProjectSelectedDTO;
  public medicineList: Array<HealthMedicine> = new Array<HealthMedicine>();
  public diseaseList: Array<HealthTreatment> = new Array<HealthTreatment>();
  public insuranceList: Array<HealthInsurance> = new Array<HealthInsurance>();
  public HealthHomeList: Array<HealthHealthHouse> = new Array<HealthHealthHouse>();
  public healthPharmacyList: Array<HealthPharmacy> = new Array<HealthPharmacy>();
  public bathRoomList: Array<HealthBathroom> = new Array<HealthBathroom>();
  public WCList: Array<HealthToilet> = new Array<HealthToilet>();
  public HealthVaccinationList: Array<HealthVaccination> = new Array<HealthVaccination>();
  public hospitalList: Array<HealthHospital> = new Array<HealthHospital>();


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

  public select0: boolean = false;
  public select1: boolean = true;
  public select2: boolean = false;
  public select3: boolean = false;
  public select4: boolean = false;
  public select5: boolean = false;
  public select6: boolean = false;
  public select7: boolean = false;
  public select8: boolean = false;

  constructor() { }

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
      this.bathRoomList = this.data.projectSpeceficDetail.healthBathrooms;
      this.HealthHomeList = this.data.projectSpeceficDetail.healthHouses;
      this.HealthVaccinationList = this.data.projectSpeceficDetail.healthVaccinations;
      this.healthPharmacyList = this.data.projectSpeceficDetail.healthPharmacies;
      this.WCList = this.data.projectSpeceficDetail.healthToilets;
      this.hospitalList = this.data.projectSpeceficDetail.hospitals;
      this.insuranceList = this.data.projectSpeceficDetail.insurances;
      this.medicineList = this.data.projectSpeceficDetail.medicines;
      this.diseaseList = this.data.projectSpeceficDetail.treatments;
      this.getBathRoomList();
      this.getHospitalList();
      this.getHealthHomeList();
      this.getInsuranceList();
      this.getHealthPharmacyList();
      this.getWCList();
      this.getHealthVaccinationList();
      this.getDiseaseList();
      this.getMedicineList();
    }
  }

  public getMedicineList(){
    for (let i = 0; i < this.medicineList.length; i++) {
      this.numberOfMedicine[i].setValue(this.medicineList[i].countOfMedicine);    
      this.typeOfMedicine[i].setValue(this.medicineList[i].typeOfMedicine);    
    }
  }

  public getDiseaseList(){
    for (let i = 0; i < this.diseaseList.length; i++) {
      this.TypeOfDisease[i].setValue(this.diseaseList[i].typeOfDisease);    
      this.NumberOfTreatments[i].setValue(this.diseaseList[i].numberOftTreatment);    
    }
  }

  public getWCList(){
    for (let i = 0; i < this.WCList.length; i++) {
      this.numberWC[i].setValue(this.WCList[i].numberOfToilet);    
    }
  }

  public getHealthVaccinationList(){
    for (let i = 0; i < this.HealthVaccinationList.length; i++) {
      this.numberVaccination[i].setValue(this.HealthVaccinationList[i].numberOfVaccination);    
    }
  }

  public getHealthPharmacyList(){
    for (let i = 0; i < this.healthPharmacyList.length; i++) {
      this.numberpharmacy[i].setValue(this.healthPharmacyList[i].numberOfPharmacy);    
    }
  }

  public getInsuranceList(){
    for (let i = 0; i < this.insuranceList.length; i++) {
      this.numberOfPeopleCoveredByInsurance[i].setValue(this.insuranceList[i].numberOfPeopleCoveredByInsurance);    
    }
  }

  public getBathRoomList(){
    for (let i = 0; i < this.bathRoomList.length; i++) {
      this.numberBathroom[i].setValue(this.bathRoomList[i].numberOfBathroom);    
    }
  }

  public getHospitalList(){
    for (let i = 0; i < this.hospitalList.length; i++) {
      this.numberOfBedsHospital[i].setValue(this.hospitalList[i].countOfBeds);    
      this.NumberOfFloors[i].setValue(this.hospitalList[i].countOfFloors);    
      this.numberHospital[i].setValue(this.hospitalList[i].numberofHospital);    
    }
  }

  public getHealthHomeList(){
    for (let i = 0; i < this.HealthHomeList.length; i++) {
      this.Meterage[i].setValue(this.HealthHomeList[i].meterage);
      this.numberOfBedsHealthHouse[i].setValue(this.HealthHomeList[i].numberOfBeds);
      this.numberDoctors[i].setValue(this.HealthHomeList[i].numberOfDoctor);
      this.numberHealthHome[i].setValue(this.HealthHomeList[i].numberOfHealthHouse);
      this.numberNurses[i].setValue(this.HealthHomeList[i].numberOfNurse);
    }
  }

  public addList(){
    this.addHealthBathroom();
    this.addHealthHome();
    this.addHealthMedicine();
    this.addHealthPharmacyList();
    this.addHealthToilet();
    this.addHealthTreatment();
    this.addHealthVaccination();
    this.addHospital();
    this.addInsuranceList();
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

  public setValue(state: ConstructionTypestring,index:number): boolean {
    let res = false;
    if(this.hospitalList) {
      if(this.hospitalList[index].constructionType == state) res = true;
    }
    return res;
  }

  public setValue1(state: ConstructionTypestring,index:number): boolean {
    let res = false;
    if(this.HealthHomeList) {
      if(this.HealthHomeList[index].constructionType == state) res = true;
    }
    return res;
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

  public addInsuranceList(){
    this.insuranceList.push(new HealthInsurance());

    this.numberOfPeopleCoveredByInsurance.push(new FormControl());
  }

  public deleteInsuranceList(index: number){
    this.insuranceList.splice(index, 1);
  }

  public addHealthPharmacyList(){
    this.healthPharmacyList.push(new HealthPharmacy());
    this.numberpharmacy.push(new FormControl());
    this.numberOfPeopleCoveredByInsurance.push(new FormControl());
  }

  public deletehealthPharmacyList(index: number){
    this.healthPharmacyList.splice(index, 1);
  }

  public addHealthBathroom(){
    this.bathRoomList.push(new HealthBathroom());
    this.numberBathroom.push(new FormControl());
  }

  public deleteHealthBathroomList(index: number){
    this.bathRoomList.splice(index, 1);
  }

  public addHealthToilet(){
    this.WCList.push(new HealthToilet());
    this.numberWC.push(new FormControl());
  }

  public deleteHealthToiletList(index: number){
    this.WCList.splice(index, 1);
  }

  public addHealthVaccination(){
    this.HealthVaccinationList.push(new HealthVaccination());
    this.numberVaccination.push(new FormControl());
  }

  public deleteHealthVaccination(index: number){
    this.HealthVaccinationList.splice(index, 1);
  }

  public addHealthTreatment(){
    this.diseaseList.push(new HealthTreatment());
    this.TypeOfDisease.push(new FormControl());
    this.NumberOfTreatments.push(new FormControl());
  }

  public deleteHealthTreatment(index: number){
    this.diseaseList.splice(index, 1);
  }

  public addHealthMedicine(){
    this.medicineList.push(new HealthMedicine());

    this.numberOfMedicine.push(new FormControl());
    this.typeOfMedicine.push(new FormControl());
  }

  public deleteHealthMedicine(index: number){
    this.medicineList.splice(index, 1);
  }

  public observeChange_numberOfPeopleCoveredByInsurance(event: string, index: number) {
    this.insuranceList[index].numberOfPeopleCoveredByInsurance = Number(event);
  }

  public observeChange_numberpharmacy(event: string, index: number) {
    this.healthPharmacyList[index].numberOfPharmacy = Number(event);
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

  public observeChange_numberBathroom(event: string, index: number) {
    this.bathRoomList[index].numberOfBathroom = Number(event);
  }

  public observeChange_numberWC(event: string, index: number) {
    this.WCList[index].numberOfToilet = Number(event);
  }

  public observeChange_numberVaccination(event: string, index: number) {
    this.HealthVaccinationList[index].numberOfVaccination = Number(event);
  }

  public observeChange_NumberOfTreatments(event: string, index: number) {
    this.diseaseList[index].numberOftTreatment = event;
  }

  public observeChange_TypeOfDisease(event: string, index: number) {
    this.diseaseList[index].typeOfDisease = event;
  }

  public observeChange_typeOfMedicine(event: string, index: number) {
    this.medicineList[index].typeOfMedicine = event;
  }

  public observeChange_numberOfMedicine(event: string, index: number) {
    this.medicineList[index].countOfMedicine = event;
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

  public setChecked(state: boolean){
    let res;
    if (state == true){
      res=true;
    }
    return res;
  }

}
