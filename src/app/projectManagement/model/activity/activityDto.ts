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

export enum DependencyActivitystring {
  none, fs, ss, ff, sf
}
