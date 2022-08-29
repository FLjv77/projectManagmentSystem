import { Router } from '@angular/router';
import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { theme } from 'highcharts';
import { throwIfEmpty } from 'rxjs';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { ApiResult } from '../../../../../auth/model/authDTO';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pproject-location-information',
  templateUrl: './pproject-location-information.component.html',
  styleUrls: ['./pproject-location-information.component.scss','../../project-creation-levels.component.scss',
              '../basic-project-information/basic-project-information.component.scss']
})
export class PProjectLocationInformationComponent implements OnInit {
  private companyId: string = '09e8ff21-ad1f-ed11-bec9-b1f673a1bda0';
  public inputCustomStyle: InputCustomStyle;
  public LocationFormControl = new FormControl();
  public checkCity: boolean;
  public checkVillage: boolean;

  constructor(private router: Router,
    private commonDataForCreateProjectService: CommonDataForCreateProjectService,
    private createrojectService: CreaterojectService) { }


  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }
  public getValue() {
    /*
    if(this.LocationFormControl.valid && this.LocationFormControl.value &&
       this.checkCity !=null && this.checkVillage != null) {
        return true;
      }
      else {return false}
      */

      return true;
  }

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }

  public changeValue(value:number){
    if (value == 1) {
      this.checkCity = !this.checkCity;
    }
    else if (value == 2) {
      this.checkVillage = !this.checkVillage;
    }
  }

  public goNextStep() {
    this.commonDataForCreateProjectService.setLocationInformation(
      'Isfahan', 'Kashan', 'Kashan', 'Kashan', 35, 52, [], []
    );

    this.createrojectService.CreateProject(
      this.companyId, this.commonDataForCreateProjectService.getCreateProject()
    ).subscribe((res: ApiResult<string>) => {
      console.log(res);
    }, (err: HttpErrorResponse) => {
      console.log(err);

    });
  }
}
