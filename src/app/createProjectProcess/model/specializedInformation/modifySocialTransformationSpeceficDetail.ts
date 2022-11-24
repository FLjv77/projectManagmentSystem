import { number } from 'echarts';
import { ConstructionTypestring } from './modifyWaterShedAndCanalsSpeceficDetail';

export class SocialTransformationSpeceficDetailDTO {
  addicions: SocialTransformationAddicion[];
  campConstructions: SocialTransformationCampConstruction[];
  divorces: SocialTransformationDivorce;
  unintentionalPrisoners: SocialTransformationUnintentionalPrisoner[];
  needies: SocialTransformationNeedy[];
  bannedFromEducations: SocialTransformationBannedFromEducation[];
  segmentations: SocialTransformationSegmentation[];
  childLabours: SocialTransformationChildLabour[];
  specialPatients: SocialTransformationSpecialPatient[];

  constructor(
    addicions: SocialTransformationAddicion[],
    campConstructions: SocialTransformationCampConstruction[],
    divorces: SocialTransformationDivorce,
    unintentionalPrisoners: SocialTransformationUnintentionalPrisoner[],
    needies: SocialTransformationNeedy[],
    bannedFromEducations: SocialTransformationBannedFromEducation[],
    segmentations: SocialTransformationSegmentation[],
    childLabours: SocialTransformationChildLabour[],
    specialPatients: SocialTransformationSpecialPatient[]
  ) {
    this.addicions = addicions;
    this.campConstructions = campConstructions;
    this.divorces = divorces;
    this.unintentionalPrisoners = unintentionalPrisoners;
    this.needies = needies;
    this.bannedFromEducations = bannedFromEducations;
    this.segmentations = segmentations;
    this.childLabours = childLabours;
    this.specialPatients = specialPatients;
  }
}

  export class SocialTransformationAddicion {
    numberOfIntroducingToCamp: number;
    addictionBudget: number;
  }

  export class SocialTransformationCampConstruction{
    numberOfCamp: number;
    addictedCapacity: number;
    numberOfFloor: number;
  }

  export class SocialTransformationDivorce {
    numberOfConsultationWorkShopn: number;
    amountOfFacilities: number;
  }

  export class SocialTransformationUnintentionalPrisoner{
    constructionType: ConstructionTypestring;
    amountOfElectronicFootCuffs: number;
    cost: string;
    amountOfFacilities: number;
    crimeType: string;
  }

  export class SocialTransformationNeedy {
    constructionType: ConstructionTypestring;
    numberOfPerson: number;
    numberOfMediconPackage: number;
    packageCost: number;
    needyEquipmentType: string;
    equipmentCost: number;
  }

 export class SocialTransformationBannedFromEducation {
    amountOfEducationalPackage: number;
    educationalCost: number;
    coveredPerson: number;
 }

export class SocialTransformationSegmentation {
  subsitencePackage: number;
  costOfPackage: number;
}

export class SocialTransformationChildLabour {
  numberOfChildLabour: number;
}

export class SocialTransformationSpecialPatient {
  numberOfDrugPackages: number;
  amountOfMedicineFacilities: number;
  numberOfCoveredPatients: number;
}
