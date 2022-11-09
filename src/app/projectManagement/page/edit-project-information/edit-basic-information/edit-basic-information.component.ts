import { CreaterojectService } from './../../../../createProjectProcess/service/projectCreationLevels/createroject.service';
import { Select2OptionData } from 'ng-select2';
import { UpdateProjectDTO } from './../../../model/project/projectDto';
import { AdvancedSearchConnecctToApiService } from 'src/app/advancedSearch/service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { InputCustomStyle } from "../../../../shared/page/component/input-style/input-style.component";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectConnectToApiService } from 'src/app/projectManagement/service/project/projectConnectToApi/project-connect-to-api.service';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';

@Component({
  selector: 'app-edit-basic-information',
  templateUrl: './edit-basic-information.component.html',
  styleUrls: ['./edit-basic-information.component.scss', '../../../../createProjectProcess/page/project-creation-levels/project-creation-levels.component.scss']
})
export class EditBasicInformationComponent implements OnInit, AfterViewInit {
  public projectNameFormControl = new FormControl();
  public projectDeliveryDateFormControl = new FormControl();
  public projectDeliveryDateFormControl1 = new FormControl();
  public descreptionFormControl = new FormControl();
  public humanResourceCostFormControl = new FormControl();
  public infrastructureCostFormControl = new FormControl();
  public addressFormControl = new FormControl();
  public LocationFormControl = new FormControl();
  public objectivesFormControl = new FormControl();
  public projectTheBottleneckFormControl = new FormControl();
  public projectChallengeFormControl = new FormControl();
  public inputCustomStyle: InputCustomStyle;
  public x_location: number;
  public y_location: number;

  public placeholderVillage: string;
  public placeholderRegion: string;
  public placeholderCity: string;
  public placeholderProvince: string;

  @Input() projectId: string | string[];
  public projectIdSelect: string | string[];
  public edit: boolean = false;

  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private projectConnectToApiService: ProjectConnectToApiService,
    private advancedSearchConnecctToApiService: AdvancedSearchConnecctToApiService,
    private createrojectService:CreaterojectService) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.getInfo();
  }

  ngAfterViewInit(): void {
    this.advancedSearchConnecctToApiService.projectIdSelected.subscribe((res: string | string[]) => {
      this.projectIdSelect = res;
      if (this.projectIdSelect) {
        this.projectConnectToApiService.getProjectGeneralPropertiesSelect(this.projectIdSelect)
          .subscribe((res: ApiResult<ProjectSelectedDTO>) => {
            this.placeholderCity = res.data.address.city;
            this.placeholderProvince = res.data.address.state;
            this.placeholderRegion = res.data.address.section;
            this.placeholderVillage = res.data.address.region;

            this.projectNameFormControl.setValue(res.data.projectName);
            this.projectDeliveryDateFormControl.setValue(res.data.projectDeliveryTime.timeInterval);
            this.descreptionFormControl.setValue(res.data.projectDescription);
            this.objectivesFormControl.setValue(res.data.projectTargets);
            this.projectChallengeFormControl.setValue(res.data.projectChallange);
            this.projectTheBottleneckFormControl.setValue(res.data.projectBottleNeck);
            this.humanResourceCostFormControl.setValue(res.data.humanResourceCost);
            this.infrastructureCostFormControl.setValue(res.data.infrastructureCost);
            this.LocationFormControl.setValue(res.data.address.longitude + '-' + res.data.address.latitude);
            this.x_location = res.data.address.longitude;
            this.y_location = res.data.address.latitude;

            console.log(this.x_location);

          });
      }
    })
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getValue() {
    if (this.projectNameFormControl.value && this.projectDeliveryDateFormControl.value && this.descreptionFormControl.value &&
      this.infrastructureCostFormControl.value && this.humanResourceCostFormControl.value && this.addressFormControl.value &&
      this.LocationFormControl.value &&
      this.projectNameFormControl.valid && this.projectDeliveryDateFormControl.valid && this.descreptionFormControl.valid &&
      this.infrastructureCostFormControl.valid && this.humanResourceCostFormControl.valid && this.addressFormControl.valid &&
      this.LocationFormControl.valid) {
      return true;
    }
    else { return false }
  }

  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap'],
      { queryParams: { address: '../../projectManagement/editProject' } });
  }

  public getInfo() {
    if (this.projectId) {
      this.projectConnectToApiService.getProjectGeneralPropertiesSelect(this.projectId)
        .subscribe((res: ApiResult<ProjectSelectedDTO>) => {
          console.log(res.data);
          this.placeholderProvince = res.data.address.state;
          this.setProvince();
          this.placeholderCity = res.data.address.city;
          console.log(this.placeholderCity);
          
          this.placeholderRegion = res.data.address.section;
          this.placeholderVillage = res.data.address.region;
          this.projectNameFormControl.setValue(res.data.projectName);
          this.projectDeliveryDateFormControl.setValue(res.data.projectDeliveryTime.year+ '/' +
          res.data.projectDeliveryTime.month+'/'+res.data.projectDeliveryTime.day);
          this.descreptionFormControl.setValue(res.data.projectDescription);
          this.objectivesFormControl.setValue(res.data.projectTargets);
          this.projectChallengeFormControl.setValue(res.data.projectChallange);
          this.projectTheBottleneckFormControl.setValue(res.data.projectBottleNeck);
          this.humanResourceCostFormControl.setValue(res.data.humanResourceCost);
          this.infrastructureCostFormControl.setValue(res.data.infrastructureCost);
          this.x_location = res.data.address.latitude;
          this.y_location = res.data.address.longitude;
        });
    }
  }

  public cityList: Array<Select2OptionData>;

  public setProvince() {
      this.createrojectService.GetItemOfRegions(this.placeholderProvince).subscribe((res: ApiResult<Array<string>>) => {
        this.cityList = [];
        for (let i = 0; i < res.data.length; i++) {
          let newValue: Select2OptionData = {
            text: res.data[i],
            id: res.data[i]
          };
          this.cityList.push(newValue);
        }
      });
  }

  public saved() {
    if (this.projectId) {
      let updateProjectDTO = new UpdateProjectDTO;
      updateProjectDTO.projectName = this.projectNameFormControl.value;
      updateProjectDTO.projectDeliveryTime = this.projectDeliveryDateFormControl1.value;
      updateProjectDTO.projectDescription = this.descreptionFormControl.value;
      updateProjectDTO.projectTargets = this.objectivesFormControl.value;
      updateProjectDTO.projectChallange = this.projectChallengeFormControl.value;
      updateProjectDTO.projectBottleNeck = this.projectTheBottleneckFormControl.value;
      updateProjectDTO.humanResourceCost = this.humanResourceCostFormControl.value;
      updateProjectDTO.infrastructureCost = this.infrastructureCostFormControl.value;
      updateProjectDTO.region = '';
      updateProjectDTO.section = '';
      updateProjectDTO.city = '';
      updateProjectDTO.country = '';
      updateProjectDTO.state = '';

      this.projectConnectToApiService.ModifyProjectGeneralInfo(this.projectId, updateProjectDTO).subscribe((
        res: ApiResult<boolean>
      ) => {
        console.log(res.data);
      })
    }
    this.edit = false;
    this.getInfo();
  }

  public editForm() {
    this.edit = true;
  }
}
