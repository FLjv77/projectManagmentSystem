import { KnowledgeBased, KnowledgeBasedSpeceficDetailDTO } from './../../../createProjectProcess/model/specializedInformation/modifyKnowledgeBasedSpeceficDetail';
import { HealthBathroom, HealthHealthHouse, HealthMedicine, HealthTreatment, HealthVaccination, HealthToilet, HealthPharmacy, HealthInsurance, HealthHospital } from './../../../createProjectProcess/model/specializedInformation/modifyGetHealthSpeceficDetail';
import { DateTime } from './../../../shared/model/dateTime';
import { Participant } from '../../../createProjectProcess/model/createProjectModel/createProject';

export class GetProjectsGeneralInfoOfCompanyDto {
  companyId: string | string[];
  projectSortedBy: ProjectSortedBy;

  constructor(companyId: string | string[], projectSortedBy: ProjectSortedBy) {
    this.companyId = companyId;
    this.projectSortedBy = projectSortedBy;
  }
}

export class ProjectSelectedDTOResualt {
  projectSelectedDTOs: ProjectSelectedDTO[];
  "dynamicProjectFilterDTO": {
    "companyName": "compa",
    "customDateFormat": 0,
    "projectSortedBy": 0,
    "pageId": 1,
    "pageCount": 0,
    "activePage": 0,
    "startPage": 0,
    "endPage": 0,
    "takeEntity": 4,
    "skipEntity": 0
  }
  pageId: number;
  pageCount: number;
  activePage: number;
  startPage: number;
  endPage: number;
  takeEntity: number;
  skipEntity: number;
}

export class ProjectSelectedDTO {
  projectId: string;
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
  projectSpeceficDetail: projectSpeceficDetail;
  resourceApiAddress: string;
  address:	AddressSelectedDTO;
  complementationStatus: ProjectComplementationStatus;
  projectStatus: ProjectDevelopeStatus;
}

export class projectSpeceficDetail{
  constructor() {}
  healthBathrooms: Array<HealthBathroom>;
  healthHouses: Array<HealthHealthHouse>;
  medicines: Array<HealthMedicine>;
  treatments: Array<HealthTreatment>;
  healthVaccinations: Array<HealthVaccination>;
  healthToilets: Array<HealthToilet>;
  healthPharmacies: Array<HealthPharmacy>;
  insurances: Array<HealthInsurance>;
  hospitals: Array<HealthHospital>;
  knowledgeBaseds: Array<KnowledgeBased>;
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
