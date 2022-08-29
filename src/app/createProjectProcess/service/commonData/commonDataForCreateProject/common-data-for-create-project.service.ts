import { Injectable } from '@angular/core';
import { CreateProjectDTO, Participant } from '../../../model/createProjectModel/createProject';
import { noop } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonDataForCreateProjectService {
  private createProjectData: CreateProjectDTO;
  constructor() {
    this.initProjectData();
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


      console.log(this.createProjectData);

  }

  public setTargetInformaton(targetId: string) {
    this.createProjectData.targetId = targetId;

    console.log(this.createProjectData);
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

    console.log(this.createProjectData);
  }
}
