import { Router } from '@angular/router';
import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { theme } from 'highcharts';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-pproject-location-information',
  templateUrl: './pproject-location-information.component.html',
  styleUrls: ['./pproject-location-information.component.scss','../../project-creation-levels.component.scss',
              '../basic-project-information/basic-project-information.component.scss']
})
export class PProjectLocationInformationComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public LocationFormControl = new FormControl();
  public checkCity: boolean = false;
  public checkVillage: boolean = false;


  constructor(private router:Router) { }


  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }
  public getValue(){
    if(this.LocationFormControl.valid){
        return true;
      }
      else{return false}
  }

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }

  public changeValue(value:number){
    if (value == 1) {
      console.log(this.checkCity);
      this.checkCity = !this.checkCity;
      console.log(this.checkCity);
    }
    else if (value == 2) {
      this.checkVillage = !this.checkVillage;
    }
  }
}
