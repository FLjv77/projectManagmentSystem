import { projectType } from './../../../model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { Router } from '@angular/router';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
  public NumberOfFloors = new FormControl();
  public numberOfBedsHospital= new FormControl();
  public numberOfBedsHealthHouse= new FormControl();
  public Meterage= new FormControl();
  public numberNurses= new FormControl();
  public numberDoctors= new FormControl();
  public numberOfPeopleCoveredByInsurance= new FormControl();
  public numberpharmacy= new FormControl();
  public numberBathroom= new FormControl();
  public numberWC= new FormControl();
  public TypeOfDisease= new FormControl();
  public NumberOfTreatments= new FormControl();
  public typeOfMedicine= new FormControl();
  public numberOfMedicine= new FormControl();
  public LocationFormControl= new FormControl();
  public numberVaccination= new FormControl();
  public numberHospital= new FormControl();
  public numberHealthHome= new FormControl();
  public medicineList: Array<heahthList> = [];
  public diseaseList: Array<heahthList> = [];
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

  public HospitalList: Array<string> = ['2223'];
  public HealthHomeList: Array<string> = ['2223'];

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

  public add(list: Array<heahthList>, name:string, number:string){
    if (!this.medicineList && name != null && number != null) this.medicineList = new Array<heahthList>();
    let medicine = new heahthList;
    medicine.name = name;
    medicine.number = number;
    list.push(medicine);
    this.typeOfMedicine.reset();
    this.numberOfMedicine.reset();
    this.NumberOfTreatments.reset();
    this.TypeOfDisease.reset();
  }

  public remove(list : Array<heahthList>, index: number){
    list.splice(index, 1);
  }

  public checkValidation(): boolean {
    let res = false;
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

    return res;
  }
  
  public setTypeProject(state: projectType){
    this.typeProject = state;
  }

  public setProjectRuralWaterArea(state: number) {
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

  addHealthHome(){
    this.HealthHomeList.push('222');
  }

  addHospital(){
    this.HospitalList.push('222');
  }

  public deleteList(list:Array<string>, index: number){
    list.splice(index, 1);
  }

}
export class heahthList{
  name : string;
  number : string;
}

