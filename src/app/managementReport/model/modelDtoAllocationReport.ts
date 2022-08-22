import { DateTime } from "src/app/shared/model/dateTime";

export class RequestAllocationReportDTO {
  constructor(projectReportId: string, allocationReport: AllocationReportDTO) {
    this.allocationReport = allocationReport;
    this.projectId = projectReportId;
  }
  projectId: string;
  allocationReport: AllocationReportDTO;
}

export class AllocationReportDTO {
  constructor(
    allocationReporterName: string,
    allocationDescription: string,
    amountOfAllocation: number,
    paymentTime: string,
    activityIds: ShareLevelOfActivityDTO[]
  ) {
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
