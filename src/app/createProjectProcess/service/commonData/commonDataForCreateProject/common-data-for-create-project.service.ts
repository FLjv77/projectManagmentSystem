

import { EventEmitter, Injectable } from '@angular/core';
import { CreateProjectDTO, Participant, ResourceInformation } from '../../../model/createProjectModel/createProject';
import { noop } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonDataForCreateProjectService {
  public selectStep = new EventEmitter<number>();
  private createProjectData: CreateProjectDTO;
  public recoveryInfo: ResourceInformation;

  public projectTargets: string;
  public projectBottleNeck: string;
  public projectChallange: string;

  public name1: Participant[] = [];
  public name2: Participant[] = [];
  public name3: Participant[] = [];
  public name4: Participant[] = [];
  public name5: Participant[] = [];
  public name6: Participant[] = [];
  public name7: Participant[] = [];


  constructor() {
    this.initProjectData();
  }

  public initCreateProjectData() {
    this.createProjectData = new CreateProjectDTO();
    this.projectTargets = '';
    this.projectBottleNeck = '';
    this.projectChallange = '';

    this.name1 = new Array<Participant>();
    this.name2 = new Array<Participant>();
    this.name3 = new Array<Participant>();
    this.name4 = new Array<Participant>();
    this.name5 = new Array<Participant>();
    this.name6 = new Array<Participant>();
    this.name7 = new Array<Participant>();

  }

  private initProjectData() {
    this.createProjectData = new CreateProjectDTO();
  }

  public getCreateProject(): CreateProjectDTO {
    return this.createProjectData;
  }

  public setBasicInformationProject(
    parentProjectId: string, projectName: string,
    projectDescription:	string, projectDeliveryTime: string,
    infrastructureCost:	number, humanResourceCost: number,
    participants: Participant[], startTimeOfProject: string) {
      parentProjectId ? this.createProjectData.parentProjectId = parentProjectId : noop;
      this.createProjectData.projectName = projectName;
      this.createProjectData.projectDeliveryTime = projectDeliveryTime;
      this.createProjectData.startTimeOfProject = startTimeOfProject;
      this.createProjectData.projectDescription = projectDescription;
      this.createProjectData.infrastructureCost = infrastructureCost;
      this.createProjectData.humanResourceCost  = humanResourceCost;
      this.createProjectData.participants = participants;

  }

  public setTargetInformaton(targetId: string) {
    this.createProjectData.targetId = targetId;
  }

  public setObjective(projectTargets: string,
    projectBottleNeck: string,
    projectChallange: string) {
    this.projectTargets = projectTargets;
    this.projectBottleNeck = projectBottleNeck;
    this.projectChallange = projectChallange;

    this.createProjectData.projectBottleNeck = projectBottleNeck;
    this.createProjectData.projectTargets = projectTargets;
    this.createProjectData.projectChallange = projectChallange;
  }

  public setLocationInformation(
    state: string|string[],
    city: string|string[],
    section: string|string[],
    region:	string|string[],
    longitude: number,
    latitude: number,
    interCities: string[],
    interRegions: string[]
  ) {
    this.createProjectData.city = city;
    this.createProjectData.country = 'ایران';
    this.createProjectData.state = state;
    this.createProjectData.section = section;
    this.createProjectData.region = region;
    this.createProjectData.longitude = longitude;
    this.createProjectData.latitude = latitude;
    this.createProjectData.interCities = interCities;
    this.createProjectData.interRegions = interRegions;
  }

  public setParticipant(participants: Array<Participant>){
    this.createProjectData.participants = participants;
  }
}
