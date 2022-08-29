import { DateTime } from './../../../shared/model/dateTime';
import { Participant } from '../../../createProjectProcess/model/createProjectModel/createProject';

export class GetProjectsGeneralInfoOfCompanyDto {
  companyId: string;
  projectSortedBy: ProjectSortedBy;

  constructor(companyId: string, projectSortedBy: ProjectSortedBy) {
    this.companyId = companyId;
    this.projectSortedBy = projectSortedBy;
  }
}

export class ProjectSelectedDTO {
  projectName:	string;
  projectDescription: string;
  projectTargets: string;
  projectChallange: string;
  projectBottleNeck: string;
  objectiveTitle: string;
  companyId: string;
  companyName: string;
  parentProjectId: string;
  parentProjectName: string;
  startTimeOfProject: DateTime;
  projectDeliveryTime: DateTime;
  infrastructureCost: number;
  humanResourceCost: number;
  participants: Participant[];
  initialInvestment: number;
  expectedProfitOfTheProject: number;
  resourceName: string;
  resourceApiAddress: string;
  address:	AddressSelectedDTO;
  complementationStatus: ProjectComplementationStatus;
  projectStatus: ProjectDevelopeStatus;
}

export class AddressSelectedDTO {
  country: string;
  state: string;
  city: string;
  section: string;
  region: string;
  longitude: number;
  latitude: number;
  interCities: string[];
  interRegions: string[];
}

export enum ProjectComplementationStatus {
  notComplete, projectPropertiesCompleted
}

export enum ProjectDevelopeStatus {
  underNegotiation, dealClosed, inProgress, finished
}

export enum ProjectSortedBy {
  none, nearestCreationDate, farthestCreationDate
}
