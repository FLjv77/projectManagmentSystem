import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DateTime } from 'src/app/shared/model/dateTime';
import { ComplementationStatus, ProjectStatus } from '../../model/advanceSearch';
import { AdvancedSearchConnecctToApiService } from '../../service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.scss', '../advanced-search-container/advanced-search-container.component.scss', '../../../../assets/style/base.scss']
})
export class FilterSideBarComponent implements OnInit {
  public activeFilter: boolean = false;
  @Output() projectStatus = new EventEmitter<ProjectStatus>();

// 2022-09-30T21:04:29.851Z
  @Output() startTimeOfProjectUpperBound = new EventEmitter<string>;
  @Output() startTimeOfProjectLowerBound = new EventEmitter<string>;
  @Output() projectDeliveryTimeUpperBound = new EventEmitter<string>;
  @Output() projectDeliveryTimeLowerBound = new EventEmitter<string>;

  @Output() complementationStatus = new EventEmitter<ComplementationStatus>;

  @Output() infrastructureUpperCost = new EventEmitter<number>;
  @Output() infrastructureLowerCost = new EventEmitter<number>;
  @Output() humanResourceUpperCost = new EventEmitter<number>;
  @Output() humanResourceLowerCost = new EventEmitter<number>;
  @Output() totaltProjectUpperCost = new EventEmitter<number>;
  @Output() totalProjectLowerCost = new EventEmitter<number>;
  @Output() projectType = new EventEmitter<string>;

  @Output() projectTargets = new EventEmitter<string>;

  constructor(private advancedSearchConnecctToApiService: AdvancedSearchConnecctToApiService) {
    this.setSelectedCompanyId();
  }

  ngOnInit(): void {
  }

  public setSelectedCompanyId() {
    this.advancedSearchConnecctToApiService.companyIdSelected.subscribe((id: string) => {
      if(id) this.activeFilter = true;
      else this.activeFilter = false;
    });
  }

  public getProjectType(event: string) {
    this.projectType.emit(event);
  }

  public changeMaxI(event: number) {
    this.infrastructureUpperCost.emit(event);
  }

  public changeMinI(event: number) {
    this.infrastructureLowerCost.emit(event);
  }

  public changeMax(event: number) {
    this.humanResourceUpperCost.emit(event);
  }

  public changeMin(event: number) {
    this.humanResourceLowerCost.emit(event);
  }


  public changeMaxT(event: number) {
    this.totaltProjectUpperCost.emit(event);
  }

  public changeMinT(event: number) {
    this.totalProjectLowerCost.emit(event);
  }

  public setProjectState(state: ProjectStatus) {
    this.projectStatus.emit(state);
  }

  public setStartTime(event: string) {
    this.startTimeOfProjectLowerBound.emit(event);
  }

  public setEndTime(event: string) {
    this.startTimeOfProjectUpperBound.emit(event);
  }

  public setStartTimeEnd(event: string) {
    this.startTimeOfProjectLowerBound.emit(event);
  }

  public setEndTimeEnd(event: string) {
    this.startTimeOfProjectUpperBound.emit(event);
  }
}
