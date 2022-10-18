import { ConstructionTypestring } from './modifyWaterShedAndCanalsSpeceficDetail';

export class RuralRoadSpeceficDetailDTO {
    constructor(
        ruralRoads: RuralRoad[]){
        this.ruralRoads=ruralRoads;
    }
    ruralRoads: RuralRoad[];
}

export class RuralRoad {
    constructor(
        // constructionType: ConstructionTypestring,currentRoadType:RoadTypestring,targetRoadType:RoadTypestring,
        //         roadLength:number,roadWidth:number,roadLongitude:number,latitude:number
                ){
        // this.constructionType = constructionType;
        // this.currentRoadType = currentRoadType;
        // this.targetRoadType = targetRoadType;
        // this.roadLength = roadLength;
        // this.roadWidth = roadWidth;
        // this.roadLongitude = roadLongitude;
        // this.latitude = latitude;
    }
    constructionType: ConstructionTypestring;
    currentRoadType: RoadTypestring;
    targetRoadType:	RoadTypestring;
    roadLength:	number;
    roadWidth: number;
    roadLongitude: number;
    latitude: number;
}

export enum RoadTypestring {
    asphalt, sandy, earthy
}