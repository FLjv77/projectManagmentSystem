import { ActivatedRoute, Router } from '@angular/router';
import { InputCustomStyle } from './../../../../../shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { ApiResult } from '../../../../../auth/model/authDTO';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from './map-container/map-container.component';
import { HandleModalService } from 'src/app/shared/service/handleModalService/handle-modal.service';
import { url } from 'src/assets/url/url';
import { CompanySelectedDTO } from '../../../../../workSpace/model/companyModel';

@Component({
  selector: 'app-pproject-location-information',
  templateUrl: './pproject-location-information.component.html',
  styleUrls: ['./pproject-location-information.component.scss','../../project-creation-levels.component.scss',
              '../basic-project-information/basic-project-information.component.scss']
})
export class PProjectLocationInformationComponent implements OnInit {
  private companyId: string;
  public inputCustomStyle: InputCustomStyle;
  public LocationFormControl = new FormControl();
  public checkCity: boolean;
  public checkVillage: boolean;
  private locations: Location[];

  private projectId: string;

  constructor(
    private router: Router,
    private activeRouting: ActivatedRoute,
    private handleModalService: HandleModalService,
    private commonDataForCreateProjectService: CommonDataForCreateProjectService,
    private createrojectService: CreaterojectService) {}

  ngOnInit(): void {
    this.initInputStyle();
    this.setCompanyId();
    this.getLocation();
    this.checkValueIsSet();
  }

  private setCompanyId() {
    let com = localStorage.getItem(url.CompanyInfo);
    if(com) {
      let c = new CompanySelectedDTO();
      c = JSON.parse(com);
      this.companyId = c.companyId;
    } else {
      let idC = this.activeRouting.snapshot.queryParamMap.get('companyId');
      if(idC) this.companyId = idC;
    }
  }

  private checkValueIsSet() {
    let projectInfo = this.commonDataForCreateProjectService.getCreateProject();
    if(projectInfo.latitude) this.LocationFormControl.setValue(projectInfo.latitude + ' - ' + projectInfo.longitude);
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private getLocation() {
    let location = this.activeRouting.snapshot.queryParamMap.get('locations');
    let projectType = this.activeRouting.snapshot.queryParamMap.get('type');
    let id = this.activeRouting.snapshot.queryParamMap.get('targetId');
    if (location !== null) {
      this.locations = JSON.parse(location);
      this.LocationFormControl.setValue(this.locations[0].x_pos + ' - ' + this.locations[0].y_pos);
    }

    this.router.navigate(['../../createProject/startCreatProject'], {queryParams: {type: projectType, targetId: id, companyId: this.companyId}});
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
    let projectType = this.activeRouting.snapshot.queryParamMap.get('type');
    let id = this.activeRouting.snapshot.queryParamMap.get('targetId');

    this.router.navigate(['../../createProject/startCreatProject'], {queryParams: {type: projectType, targetId: id, companyId: this.companyId}});
    this.router.navigate(['../../createProject/selectLocationOnMap'], {queryParams: {type: projectType, targetId: id, companyId: this.companyId}});
  }

  public changeValue(value:number){
    if (value == 1) {
      this.checkCity = !this.checkCity;
    }
    else if (value == 2) {
      this.checkVillage = !this.checkVillage;
    }
  }

  public openModal() {
    this.handleModalService.openModal('create-project');
  }

  public createProject(event: boolean){
    if (event==false) {
      this.router.navigate(['../projectManagement/projectList'] , {queryParams: {idCompany : this.companyId}});
    }
    else if(event==true) {
      let projectType = this.activeRouting.snapshot.queryParamMap.get('type');
      let id = this.activeRouting.snapshot.queryParamMap.get('targetId');

      this.router.navigate(['../../createProject/startCreatProject'],
       {queryParams: {type: projectType, targetId: id, companyId: this.companyId, projectId: this.projectId}});
      this.commonDataForCreateProjectService.selectStep.emit(4);

      setTimeout(() => {
        document.getElementById('detailInformation')?.click();
      }, 200);

    }
  }

  public goNextStep() {
    this.commonDataForCreateProjectService.setLocationInformation(
      'Isfahan', 'Kashan', 'Kashan', 'Kashan', this.locations[0].x_pos, this.locations[0].y_pos, [], []
    );
    this.createrojectService.CreateProject(
      this.companyId, this.commonDataForCreateProjectService.getCreateProject()
    ).subscribe((res: ApiResult<string>) => {
      if(res.isSuccess && res.statusCode == 200) {
        this.openModal();
        this.projectId = res.data;
      }
    }, (err: HttpErrorResponse) => {
    });
  }

}
