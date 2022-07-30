import { Router } from '@angular/router';
import { InputCustomStyle } from './../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-information',
  templateUrl: './health-information.component.html',
  styleUrls: ['./health-information.component.scss', '../../project-creation-levels/project-creation-levels.component.scss',
  '../specialized-information-removal-marginalization/specialized-information-removal-marginalization.component.scss',
  '../specialized-information-rural-housing/specialized-information-rural-housing.component.scss']
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
  public medicineList: Array<heahthList> = [];
  public diseaseList: Array<heahthList> = [];

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

}
export class heahthList{
  name : string;
  number : string;
}

