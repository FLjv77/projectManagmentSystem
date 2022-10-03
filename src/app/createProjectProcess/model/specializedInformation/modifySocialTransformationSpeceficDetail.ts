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
}

export class SocialTransformationAddicion {
    constructor() {}
    numberOfIntroducingToCamp: number;
    addictionBudget: number;
}

export class SocialTransformationCampConstruction {
    constructor(numberOfCamp: number,addictedCapacity: number,numberOfFloor: number){
        this.numberOfCamp = numberOfCamp;
        this.addictedCapacity = addictedCapacity;
        this.numberOfFloor = numberOfFloor;
    }
    numberOfCamp: number;
    addictedCapacity: number;
    numberOfFloor: number;
}

export class SocialTransformationDivorce {
    constructor(numberOfConsultationWorkShopn: number,amountOfFacilities: number){
        this.numberOfConsultationWorkShopn = numberOfConsultationWorkShopn;
        this.amountOfFacilities = amountOfFacilities;
    }
    numberOfConsultationWorkShopn: number;
    amountOfFacilities: number;
}

export class SocialTransformationUnintentionalPrisoner {
    constructor(constructionType: ConstructionTypestring,amountOfElectronicFootCuffs: number,cost: string,
                amountOfFacilities:	number,crimeType:	string){
        this.constructionType = constructionType;
        this.amountOfElectronicFootCuffs = amountOfElectronicFootCuffs;
        this.cost = cost;
        this.amountOfFacilities = amountOfFacilities;
        this.crimeType = crimeType;
    }
    constructionType: ConstructionTypestring;
    amountOfElectronicFootCuffs: number;
    cost: string;
    amountOfFacilities:	number;
    crimeType:	string;
}

export class SocialTransformationBannedFromEducation {
    constructor(amountOfEducationalPackage:	number,educationalCost: number,coveredPerson: number){
        this.amountOfEducationalPackage = amountOfEducationalPackage;
        this.educationalCost = educationalCost;
        this.coveredPerson = coveredPerson;
    }
    amountOfEducationalPackage:	number;
    educationalCost: number;
    coveredPerson: number;
}

export class  SocialTransformationSegmentation {
    constructor(subsitencePackage:number,costOfPackage:number){
        this.subsitencePackage = subsitencePackage;
        this.costOfPackage = costOfPackage;
    }
    subsitencePackage:	number;
    costOfPackage:	number;
}

export class SocialTransformationSpecialPatient {
    constructor(numberOfDrugPackages: number,amountOfMedicineFacilities:number,numberOfCoveredPatients: number){
        this.numberOfDrugPackages = numberOfDrugPackages;
        this.amountOfMedicineFacilities = amountOfMedicineFacilities;
        this.numberOfCoveredPatients = numberOfCoveredPatients;
    }
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
