export class WaterShedAndCanalsSpeceficDetailBehaviorDTO {
    //waterShedAndCanalsScope: WaterShedAndCanalsScopestring;
    consumability: string;
    resourceStability: string;
    currentDebye: number;
    ownerShipType: string;
    typeOfLand: string;
    requirements: string;
    equipment: string;
    pit: PitWaterShedAndCanals[];
    fountain: FountainWaterShedAndCanals[];
    dam: DamWaterShedAndCanals[];
    distributionNetwork: DistributionNetworkWaterShedAndCanals[];
    tank: TankWaterShedAndCanals[];
    pumpStation: PumpStationWaterShedAndCanals[];
    refinery: RefineryWaterShedAndCanals[];
    dike: DikeWaterShedAndCanals[];
    transferLine: TransferLineWaterShedAndCanals[];
}

export enum WaterShedAndCanalsScopestring {
    pit, fountain, dam, distributionNetwork, tank, pumpStation, refinery, dike, transferLine
}

export class PitWaterShedAndCanals {
    constructor(
        // constructionType: ConstructionTypestring,coveredLandArea: string,pitDiameter: string,
        //         tubeLenght: string,coolLenght:	string
                ){
        // this.constructionType = constructionType;
        // this.coveredLandArea = coveredLandArea;
        // this.pitDiameter = pitDiameter;
        // this.tubeLenght = tubeLenght;
        // this.coolLenght = coolLenght;
    }
    constructionType: ConstructionTypestring;
    coveredLandArea: string;
    pitDiameter: string;
    tubeLenght:	string;
    coolLenght:	string;
}

export enum ConstructionTypestring {
    newConstruction, completeAndDevelope, repair
}

export class FountainWaterShedAndCanals {
    constructor ( 
        // constructionType: ConstructionTypestring,description: string
        ){
        // this.constructionType = constructionType;
        // this.description = description;
    }
    constructionType: ConstructionTypestring;
    description: string;
}

export class DamWaterShedAndCanals {
    constructor(
        // constructionType: ConstructionTypestring,damStatus: string,wateringCapacity: string,
        //         riverName: string,damMaterialType: string,damTankVolume: number,damDescription: string
                ){
        // this.constructionType = constructionType;
        // this.damStatus = damStatus;
        // this.wateringCapacity = wateringCapacity;
        // this.riverName = riverName;
        // this.damMaterialType = damMaterialType;
        // this.damTankVolume = damTankVolume;
        // this.damDescription = damDescription;
    }
    constructionType: ConstructionTypestring;
    damStatus: string;
    wateringCapacity: string;
    riverName: string;
    damMaterialType: string;
    damTankVolume: number;
    damDescription: string;
}

export class DistributionNetworkWaterShedAndCanals {
    constructor(
        // constructionType: ConstructionTypestring,description: string,distributionNetworkStatus: string,
        //         boosterPumpOnline: string,typeOfPipe: string,transferLineLength: string
                ){
        // this.constructionType = constructionType;
        // this.description = description;
        // this.distributionNetworkStatus = distributionNetworkStatus;
        // this.boosterPumpOnline = boosterPumpOnline;
        // this.typeOfPipe = typeOfPipe;
        // this.transferLineLength = transferLineLength;
    }
    constructionType: ConstructionTypestring;
    description: string;
    distributionNetworkStatus: string;
    boosterPumpOnline: string;
    typeOfPipe:	string;
    transferLineLength:	string;
}

export class TankWaterShedAndCanals {
    constructor(
        // constructionType: ConstructionTypestring,currentTankStatus: string,
        //         tankMaterialType: string,tankVolume: string
                ){
        // this.constructionType = constructionType;
        // this.currentTankStatus = currentTankStatus;
        // this.tankMaterialType = tankMaterialType;
        // this.tankVolume = tankVolume;
    }
    constructionType: ConstructionTypestring;
    currentTankStatus: string;
    tankMaterialType: string;
    tankVolume: string;
}

export class PumpStationWaterShedAndCanals {
    constructor(
        //constructionType: ConstructionTypestring,pumpStationStatus: string
        ){
        // this.constructionType = constructionType;
        // this.pumpStationStatus = pumpStationStatus;
    }
    constructionType: ConstructionTypestring;
    pumpStationStatus: string;
}

export class RefineryWaterShedAndCanals {
    constructor(
        // constructionType: ConstructionTypestring,refineryStatus: string,
        //         electricalEquipmentStatus: string,refineryCapacity: string
                ){
        // this.constructionType = constructionType;
        // this.refineryStatus = refineryStatus;
        // this.electricalEquipmentStatus = electricalEquipmentStatus;
        // this.refineryCapacity = refineryCapacity;
    }
    constructionType: ConstructionTypestring;
    refineryStatus: string;
    electricalEquipmentStatus: string;
    refineryCapacity: string;
}

export class DikeWaterShedAndCanals {
    constructor(
        // constructionType: ConstructionTypestring,riverName: string,waterProviderResourceStatus: string,
        //         pumping: number,dam: string,riverWidth: number,dikeMaterialType: number,width: number,length: number,
        //         height: number
                ){
        // this.constructionType = constructionType;
        // this.riverName = riverName;
        // this.waterProviderResourceStatus = waterProviderResourceStatus;
        // this.pumping = pumping;
        // this.dam = dam;
        // this.riverWidth = riverWidth;
        // this.dikeMaterialType = dikeMaterialType;
        // this.width = width;
        // this.length = length;
        // this.height = height;
    }
    constructionType: ConstructionTypestring;
    riverName: string;
    waterProviderResourceStatus: string;
    pumping: number;
    dam: string;
    riverWidth: number;
    dikeMaterialType: number;
    width: number;
    length: number;
    height: number;
}

export class TransferLineWaterShedAndCanals {
    constructor(
        // constructionType: ConstructionTypestring,transferLineStatus: string,transferLineType: string,
        //         transferLineLenght: number,transferLineSource:	number,transferLineDestination: number
                ){
        // this.constructionType = constructionType;
        // this.transferLineStatus = transferLineStatus;
        // this.transferLineType = transferLineType;
        // this.transferLineLenght = transferLineLenght;
        // this.transferLineSource = transferLineSource;
        // this.transferLineDestination = transferLineDestination;
    }
    constructionType: ConstructionTypestring;
    transferLineStatus: string;
    transferLineType: string;
    transferLineLenght: number;
    transferLineSource:	number;
    transferLineDestination: number;
}