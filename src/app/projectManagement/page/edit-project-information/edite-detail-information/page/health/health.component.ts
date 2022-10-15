import { InputCustomStyle } from './../../../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { ConstructionTypestring } from './../../../../../../createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { HealthMedicine, HealthHealthHouse, HealthInsurance, HealthTreatment, HealthPharmacy, HealthBathroom, HealthVaccination, HealthToilet, HealthHospital } from './../../../../../../createProjectProcess/model/specializedInformation/modifyGetHealthSpeceficDetail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.addList();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
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

}
