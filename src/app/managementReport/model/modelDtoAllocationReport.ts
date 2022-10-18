export class RequestAllocationReportDTO {
  constructor( allocationReporterName: string,allocationDescription: string,amountOfAllocation: number,
              paymentTime: string,activityIds: ShareLevelOfActivityDTO[]) {
                this.allocationDescription = allocationDescription;
                this.allocationReporterName = allocationReporterName;
                this.amountOfAllocation = amountOfAllocation;
                this.paymentTime = paymentTime;
                this.activityIds = activityIds;
  }
  allocationReporterName: string;
  allocationDescription: string;
  amountOfAllocation: number;
  paymentTime: string;
  activityIds: ShareLevelOfActivityDTO[];
}

export class ShareLevelOfActivityDTO {
  activityId: string;
  shareLevelOfActivity: number;
}

export class RequestAllocationVerificationDTO {
  allocationReportId: string;
  allocationVerificationDTO: AllocationVerificationDTO;

  constructor(allocationReportId: string,
    allocationVerificationDTO: AllocationVerificationDTO) {
      this.allocationReportId = allocationReportId;
      this.allocationVerificationDTO = allocationVerificationDTO;
  }
}

export class AllocationVerificationDTO {
  constructor(status: Status, commentBody: string) {
    this.status = status;
    this.commentBody = commentBody;
  }

  status: Status;
  commentBody: string;
}

export enum Status {
  accept, reject, acceptWithModified
}

export class ProgressReportDTO {
  constructor(progressReporterName:	string,progressDescription:	string,progressPercentage:	number,progressCommitmentDate:	string,activityIds:	ShareLevelOfActivityDTO[]){
    this.progressReporterName = progressReporterName;
    this.progressDescription = progressDescription;
    this.progressPercentage = progressPercentage;
    this.progressCommitmentDate = progressCommitmentDate;
    this.activityIds = activityIds;
  }
  progressReporterName:	string;
  progressDescription:	string;
  progressPercentage:	number;
  progressCommitmentDate:	string;
  activityIds:	ShareLevelOfActivityDTO[];
}