import { projectType } from '../EnumForSpecializeInformation/EnumForSpecializeInformation';
export class CreateProjectDTO {
    constructor(){}

    projectTargets: string;
    projectChallange: string;
    projectBottleNeck: string;
    parentProjectId: string;
    projectName: string;
    projectDescription:	string;
    projectDeliveryTime: string;
    infrastructureCost:	number;
    humanResourceCost:	number;
    participants: Participant[];
    targetId: string;
    startTimeOfProject: string;
    country: string|string[];
    state: string|string[];
    city: string|string[];
    section: string|string[];
    region:	string|string[];
    longitude: number;
    latitude: number;
    interCities: string[];
    interRegions: string[];
}

export class Participant {
    tag: string;
    firstName: string;
    lastName: string;

    constructor(tag: string,fName: string, lName: string) {
      this.tag = tag;
      this.firstName = fName;
      this.lastName = lName;
    }
}

export class CreateParentActivityDTO {
    name: string;
    startOfActivity: string;
    endOfActivity: string;
    approximateCost: number;
    timeWeight:	number;
    costWeight:	number;
    description: string;

    constructor(
      name: string,
      startOfActivity: string,
      endOfActivity: string,
      approximateCost: number,
      timeWeight:	number,
      costWeight:	number,
      description: string
    ) {
      this.name = name;
      this.startOfActivity = startOfActivity;
      this.endOfActivity = endOfActivity;
      this.approximateCost = approximateCost;
      this.timeWeight = timeWeight;
      this.costWeight = costWeight;
      this.description = description;
    }
}


export class CreateActivityDTO {
  name: string;
  startOfActivity: string;
  endOfActivity: string;
  approximateCost: number;
  timeWeight:	number;
  costWeight:	number;
  description: string;
  parentProjectId: string;

  constructor(
    name: string,
    startOfActivity: string,
    endOfActivity: string,
    approximateCost: number,
    timeWeight:	number,
    costWeight:	number,
    description: string,
    parentProjectId: string
  ) {
    this.name = name;
    this.startOfActivity = startOfActivity;
    this.endOfActivity = endOfActivity;
    this.approximateCost = approximateCost;
    this.timeWeight = timeWeight;
    this.costWeight = costWeight;
    this.description = description;
    this.parentProjectId = parentProjectId;
  }
}


export class OutputInfo {
    constructor(inputs : Array<string> , state: number){
        this.inputs = inputs;
        this.state = state;
    }
    inputs : Array<string>;
    state: projectType;
}
export class ResourceInformation {
  constructor(resourceName: string,
    resourceApiAddress: string) {
      this.resourceName = resourceName;
      this.resourceApiAddress = resourceApiAddress;
  }
  resourceName: string;
  resourceApiAddress: string;
}


export class SearchLocationSelectedDto {
  states: State[];
}

export class Rural {
  id:string;
  name:string;
}

export class Region {
  name:string;
  rurals:Rural[];
}

export class City {
  name:string;
  regions: Region[];
}

export class State {
  name:string;
  cities:City[];
}