import { RuralRoad } from 'src/app/createProjectProcess/model/specializedInformation/modifyRuralRoadSpeceficDetail';
import { DamWaterShedAndCanals, DikeWaterShedAndCanals, DistributionNetworkWaterShedAndCanals, FountainWaterShedAndCanals, PumpStationWaterShedAndCanals, RefineryWaterShedAndCanals, TankWaterShedAndCanals, TransferLineWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { WaterShedAndCanalsSpeceficDetailBehaviorDTO, PitWaterShedAndCanals } from './../../../createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { RevivalIndustry } from 'src/app/createProjectProcess/model/specializedInformation/modifyRevivalIndustrySpeceficDetail';
import { KnowledgeBased } from './../../../createProjectProcess/model/specializedInformation/modifyKnowledgeBasedSpeceficDetail';
import { HealthBathroom, HealthHealthHouse, HealthMedicine, HealthTreatment, HealthVaccination, HealthToilet, HealthPharmacy, HealthInsurance, HealthHospital } from './../../../createProjectProcess/model/specializedInformation/modifyGetHealthSpeceficDetail';
import { DateTime } from './../../../shared/model/dateTime';
import { Participant } from '../../../createProjectProcess/model/createProjectModel/createProject';
import { SocialTransformationAddicion, SocialTransformationCampConstruction, SocialTransformationDivorce, SocialTransformationUnintentionalPrisoner, SocialTransformationSegmentation, SocialTransformationSpecialPatient, SocialTransformationBannedFromEducation } from 'src/app/createProjectProcess/model/specializedInformation/modifySocialTransformationSpeceficDetail';

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
  dynamicProjectFilterDTO: DynamicProjectFilterDTO;
  pageId: number;
  pageCount: number;
  activePage: number;
  startPage: number;
  endPage: number;
  takeEntity: number;
  skipEntity: number;
}

export class DynamicProjectFilterDTO{
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
  projectDeliveryTimeAsNumber: number;
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
  revivalIndustries: Array<RevivalIndustry>;
  WaterShedAndCanalsSpeceficDetailBehaviorDTO: WaterShedAndCanalsSpeceficDetailBehaviorDTO;
  consumability: String;
  currentDebye: number;
  dam: Array<DamWaterShedAndCanals>;
  dike: Array<DikeWaterShedAndCanals>;
  distributionNetwork: Array<DistributionNetworkWaterShedAndCanals>
  equipment: string;
  fountain: Array<FountainWaterShedAndCanals>;
  ownerShipType: string;
  pit: Array<PitWaterShedAndCanals>;
  pumpStation: Array<PumpStationWaterShedAndCanals>;
  refinery: Array<RefineryWaterShedAndCanals>;
  requirements: string;
  resourceStability: string;
  tank: Array<TankWaterShedAndCanals>;
  transferLine: Array<TransferLineWaterShedAndCanals>;
  typeOfLand: string;
  ruralRoads: Array<RuralRoad>;
  addicions: Array<SocialTransformationAddicion>;
  campConstructions: Array<SocialTransformationCampConstruction>;
  divorces: Array<SocialTransformationDivorce>;
  unintentionalPrisoners: Array<SocialTransformationUnintentionalPrisoner>;
  bannedFromEducations: Array<SocialTransformationBannedFromEducation>;
  segmentations: Array<SocialTransformationSegmentation>;
  specialPatients: Array<SocialTransformationSpecialPatient>;
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


export class UpdateProjectDTO {
  projectName: string;
  projectDescription: string;
  projectTargets: string;
  projectChallange: string;
  projectBottleNeck: string;
  startTimeOfProject: string;
  projectDeliveryTime: string;
  infrastructureCost: number;
  humanResourceCost: number;
  country: string;
  state: string;
  city: string;
  section: string;
  region: string;
  longitude: number;
  latitude: number;
  interCities: Array<string>;
  interRegions: Array<string>;
}

export class CompanyProjectProgress {
  companyId: string;
  companyName: string;
  projectProgresses: ProjectProgress[];
}

export class ProjectProgress{
  projectId: string;
  projectName: string;
  projectCurrentProgressPercentage: number;
  projectNormalProgressPercentage: number;
}
