export class CreateProjectDTO {
    constructor(projectName: string,projectDescription:	string,targetId: string,parentProjectId: string,startTimeOfProject: string,projectDeliveryTime: string,
        infrastructureCost:	number,humanResourceCost:	number,participants: Participant,country: string,state: string,city: string,
        section: string,region:	string,longitude: number,latitude: number,interCities: string,interRegions: string){
            this.projectName = projectName;
            this.projectDescription = projectDescription;
            this.targetId = targetId;
            this.parentProjectId = parentProjectId;
            this.startTimeOfProject = startTimeOfProject;
            this.projectDeliveryTime = projectDeliveryTime;
            this.projectDeliveryTime = projectDeliveryTime;
            this.infrastructureCost = infrastructureCost;
            this.humanResourceCost = humanResourceCost;
            this.participants = participants;
            this.country = country;
            this.state = state;
            this.city = city;
            this.section = section;
            this.region = region;
            this.longitude = longitude;
            this.latitude = latitude;
            this.interCities = interCities;
            this.interRegions = interRegions;
        }
    projectName: string;
    projectDescription:	string;
    targetId: string;
    parentProjectId: string;
    startTimeOfProject: string;
    projectDeliveryTime: string;
    infrastructureCost:	number;
    humanResourceCost:	number;
    participants: Participant;
    country: string;
    state: string;
    city: string;
    section: string;
    region:	string;
    longitude: number;
    latitude: number;
    interCities: string;
    interRegions: string;
}

export class Participant{
    firstName: string;
    lastName: string;
}