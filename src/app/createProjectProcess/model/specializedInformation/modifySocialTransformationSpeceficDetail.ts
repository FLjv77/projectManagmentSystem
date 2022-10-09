import { ConstructionTypestring } from './modifyWaterShedAndCanalsSpeceficDetail';

export class SocialTransformationSpeceficDetailDTO {
    addicions: SocialTransformationAddicion[];
    campConstructions: SocialTransformationCampConstruction[];
    divorces: SocialTransformationDivorce[];
    unintentionalPrisoners: SocialTransformationUnintentionalPrisoner[];
    bannedFromEducations: SocialTransformationBannedFromEducation[];
    segmentations: SocialTransformationSegmentation[];
    specialPatients: SocialTransformationSpecialPatient[];
    Needies = [];
    Divorces = [];
    ChildLabours = [];
    constructor(
      addicions: SocialTransformationAddicion[],
      campConstructions: SocialTransformationCampConstruction[],
      divorces: SocialTransformationDivorce[],
      unintentionalPrisoners: SocialTransformationUnintentionalPrisoner[],
      bannedFromEducations: SocialTransformationBannedFromEducation[],
      segmentations: SocialTransformationSegmentation[],
      specialPatients: SocialTransformationSpecialPatient[]
    ) {
      this.addicions = addicions;
      this.campConstructions = campConstructions;
      this.divorces = divorces;
      this.unintentionalPrisoners = unintentionalPrisoners;
      this.bannedFromEducations = bannedFromEducations;
      this.segmentations = segmentations;
      this.specialPatients = specialPatients;
    }
}

export class SocialTransformationAddicion {
    constructor() {}
    numberOfIntroducingToCamp: number;
    addictionBudget: number;
}

export class SocialTransformationCampConstruction {
    constructor(){}
    numberOfCamp: number;
    addictedCapacity: number;
    numberOfFloor: number;
}

export class SocialTransformationDivorce {
    constructor() {}
    numberOfConsultationWorkShopn: number;
    amountOfFacilities: number;
}

export class SocialTransformationUnintentionalPrisoner {
    constructor(){
    }
    constructionType: ConstructionTypestring;
    amountOfElectronicFootCuffs: number;
    cost: string;
    amountOfFacilities:	number;
    crimeType:	string;
}

export class SocialTransformationBannedFromEducation {
    constructor() {}
    amountOfEducationalPackage:	number;
    educationalCost: number;
    coveredPerson: number;
}

export class  SocialTransformationSegmentation {
    constructor() {}
    subsitencePackage:	number;
    costOfPackage:	number;
}

export class SocialTransformationSpecialPatient {
    constructor() {}
    numberOfDrugPackages: number;
    amountOfMedicineFacilities:	number;
    numberOfCoveredPatients: number;
}

export class SocialTransformationNeedy {
    constructor(constructionType: ConstructionTypestring,numberOfPerson: number,numberOfMediconPackage: number,
                packageCost: number,needyEquipmentType:	string,equipmentCost: number){
        this.constructionType = constructionType;
        this.numberOfMediconPackage = numberOfMediconPackage;
        this.numberOfPerson = numberOfPerson;
        this.packageCost = packageCost;
        this.needyEquipmentType = needyEquipmentType;
        this.equipmentCost = equipmentCost;
    }
    constructionType: ConstructionTypestring;
    numberOfPerson: number;
    numberOfMediconPackage: number;
    packageCost: number;
    needyEquipmentType:	string;
    equipmentCost: number;
}

export class SocialTransformationChildLabour {
    constructor(numberOfChildLabour: number){
        this.numberOfChildLabour = numberOfChildLabour;
    }
    numberOfChildLabour: number;
}
