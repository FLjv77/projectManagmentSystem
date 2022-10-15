import { projectType } from '../EnumForSpecializeInformation/EnumForSpecializeInformation';
export class CreateProjectDTO {
    constructor(){}
    parentProjectId: string;
    projectName: string;
    projectDescription:	string;
    projectDeliveryTime: string;
    infrastructureCost:	number;
    humanResourceCost:	number;
    participants: Participant[];
    targetId: string;
    startTimeOfProject: string;
    country: string;
    state: string;
    city: string;
    section: string;
    region:	string;
    longitude: number;
    latitude: number;
    interCities: string[];
    interRegions: string[];
}

export class Participant{
    tag: string;
    firstName: string;
    lastName: string;

    constructor(fName: string, lName: string , tag: string) {
      this.firstName = fName;
      this.lastName = lName;
      this.tag = tag;
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
