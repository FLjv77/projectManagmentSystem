import { DateTime } from '../../shared/model/dateTime';
export enum Allocation{
    assigned, unAssigned
}

export enum Cost{
    remainingCost, costConsumed, totalCost
}

export enum Development{
    progressReported, approvedProgress

}

export enum ProjectState{
    completed, supplement, inWorking
}

export enum ReportState {
  progress, cost, timing, income
}


export class GetProjectsWithDynamicFilterDto {
  constructor(companyId: string) {
    this.companyId = companyId;
  }
  companyId: string;
  complementationStatus: ComplementationStatus;
  projectStatus: ProjectStatus;
  startTimeOfProjectUpperBound: DateTime;
  startTimeOfProjectLowerBound: DateTime;
  projectDeliveryTimeUpperBound: DateTime;
  projectDeliveryTimeLowerBound: DateTime;
  companyName: string;
  infrastructureUpperCost: number;
  infrastructureLowerCost: number
  humanResourceUpperCost: number;
  humanResourceLowerCost: number;
  totaltProjectUpperCost: number;
  totalProjectLowerCost: number;
  projectTargets: string;
  state: string;
  city: string;
  projectSortedBy: projectSort;
  pageId: number;
  pageCount: number;
  activePage: number;
  startPage: number;
  endPage: number;
  takeEntity: number;
  skipEntity: number;
}

export enum ComplementationStatus {
  notComplete, projectPropertiesCompleted
}

export enum ProjectStatus {
  underNegotiation, dealClosed, inProgress, finished
}

export enum projectSort {
  none, nearestCreationDate, farthestCreationDate
}
