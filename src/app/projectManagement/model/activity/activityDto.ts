export class RequestCreateActivityDependency {
  constructor(projectId: string, createActivityDependency: CreateActivityDependency) {
    this.projectId = projectId;
    this.createActivityDependency = createActivityDependency;
  }
  projectId: string;
  createActivityDependency: CreateActivityDependency;
}

export class CreateActivityDependency{
  constructor(sourceActivityName: string,
    destinationActivityName: string,
    dependencyActivity: DependencyActivitystring) {
      this.sourceActivityName = sourceActivityName;
      this.destinationActivityName = destinationActivityName;
      this.dependencyActivity = dependencyActivity;
  }
  sourceActivityName: string;
  destinationActivityName: string;
  dependencyActivity: DependencyActivitystring;
}

export class CreateActivityDTO {
  name: string;
  startOfActivity: string;
  endOfActivity: string
  approximateCost: number;
  timeWeight: number;
  costWeight: number;
  description: string;
  constructor(
    name: string,
    startOfActivity: string,
    endOfActivity: string,
    approximateCost: number,
    timeWeight: number,
    costWeight: number,
    description: string,
  ) {
    this.name = name;
    this.startOfActivity = startOfActivity;
    this.endOfActivity = endOfActivity;
    this.approximateCost = approximateCost;
    this.timeWeight = timeWeight;
    this.costWeight = timeWeight;
    this.description = description;
  }
  }

export enum DependencyActivitystring {
  none, fs, ss, ff, sf
}
