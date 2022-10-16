

import { EventEmitter, Injectable } from '@angular/core';
import { CreateProjectDTO, Participant } from '../../../model/createProjectModel/createProject';
import { noop } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonDataForCreateProjectService {
  public selectStep = new EventEmitter<number>();
  private createProjectData: CreateProjectDTO;
  public projectTargets: string;
  public projectBottleNeck: string;
  public projectChallange: string;

  constructor() {
    this.initProjectData();
  }

  public initCreateProjectData() {
    this.createProjectData = new CreateProjectDTO();
    this.projectTargets = '';
    this.projectBottleNeck = '';
    this.projectChallange = '';
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
  }

  public setLocationInformation(
    state: string,
    city: string,
    section: string,
    region:	string,
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
