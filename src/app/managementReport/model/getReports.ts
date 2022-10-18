export class AllocationReportPaginationSelectedDto {
    constructor() {}
    pageId: number;
    pageCount: number;
    activePage: number;
    startPage: number;
    endPage: number;
    takeEntity: number;
    skipEntity: number;
    allocationReportSelectedDtos: AllocationReportSelectedDto[];
    allocationReportDynamicFilter: AllocationReportDynamicFilter;
}

export class AllocationReportSelectedDto {
    constructor() {}
    allocationReportId: string;
    allocationReporterName: string;
    allocationDescription: string;
    amountOfAllocation: number;
    allocationCommitmentDate: CustomDateTimeFormat
    paymentTime: CustomDateTimeFormat;
}

export class CustomDateTimeFormat {
    constructor(dayOfWeak: string,monthName: string,year: string,month: string,day: string,hour: string,minutes: string
        ,second: string,millisecond: string,epochTime: string,utcTime: string,timeInterval: string)
        {
            this.dayOfWeak=dayOfWeak;
            this.monthName=monthName;
            this.year=year;
            this.month=month;
            this.day=day;
            this.hour=hour;
            this.minutes=minutes;
            this.second=second;
            this.millisecond=millisecond;
            this.epochTime=epochTime;
            this.utcTime=utcTime;
            this.timeInterval=timeInterval;
        }
    dayOfWeak: string;
    monthName: string;
    year: string;
    month: string;
    day: string;
    hour: string;
    minutes: string;
    second: string;
    millisecond: string;
    epochTime: string;
    utcTime: string;
    timeInterval: string;
}

export class AllocationReportDynamicFilter {
    constructor(pageId: number,pageCount: number,activePage: number,startPage: number,endPage: number,
    takeEntity: number,skipEntity: number,projectId: string,activityIds: string[],reportStatus: Status,
    userSupervisorAcceptedOrRejectedNameOrPhoneNumber: string)
    {
        this.pageId=pageId;
        this.pageCount=pageCount;
        this.activePage=activePage;
        this.startPage=startPage;
        this.endPage=endPage;
        this.takeEntity=takeEntity;
        this.skipEntity=skipEntity;
        this.projectId=projectId;
        this.activityIds=activityIds;
        this.reportStatus=reportStatus;
        this.userSupervisorAcceptedOrRejectedNameOrPhoneNumber=userSupervisorAcceptedOrRejectedNameOrPhoneNumber;
    }
    pageId: number;
    pageCount: number;
    activePage: number;
    startPage: number;
    endPage: number;
    takeEntity: number;
    skipEntity: number;
    projectId: string;
    activityIds: string[];
    reportStatus: Status;
    userSupervisorAcceptedOrRejectedNameOrPhoneNumber: string;
}

export enum Status {
    accept, reject, acceptWithModified
}

export class ProgressReportPaginationSelectedDto {
    constructor(pageId: number,pageCount: number,activePage: number,startPage: number,
        endPage: number,takeEntity: number,skipEntity: number,
        progressReportSelectedDtos: ProgressReportSelectedDto[],
        progressReportDynamicFilter: AllocationReportDynamicFilter)
        {
            this.pageId=pageId;
            this.pageCount=pageCount;
            this.activePage=activePage;
            this.startPage=startPage;
            this.endPage=endPage;
            this.takeEntity=takeEntity;
            this.skipEntity=skipEntity;
            this.progressReportSelectedDtos=progressReportSelectedDtos;
            this.progressReportDynamicFilter=progressReportDynamicFilter;
        }
    pageId: number;
    pageCount: number;
    activePage: number;
    startPage: number;
    endPage: number;
    takeEntity: number;
    skipEntity: number;
    progressReportSelectedDtos:	ProgressReportSelectedDto[];
    progressReportDynamicFilter: ProgressReportDynamicFilter;
}

export class ProgressReportSelectedDto {
    constructor(progressReportId: string,progressReporterName: string,
        progressDescription: string,progressPercentage: number,progressCommitmentDate: CustomDateTimeFormat)
        {
            this.progressReportId=progressReportId;
            this.progressReporterName=progressReporterName;
            this.progressDescription=progressDescription;
            this.progressPercentage=progressPercentage;
            this.progressCommitmentDate=progressCommitmentDate;
        }
    progressReportId: string;
    progressReporterName: string;
    progressDescription: string;
    progressPercentage: number;
    progressCommitmentDate: CustomDateTimeFormat;
}

export class ProgressReportDynamicFilter {
    constructor(pageId: number,pageCount: number,activePage: number,startPage: number,
        endPage: number,takeEntity: number,skipEntity: number,projectId: string,activityIds: string[],
        reportStatus: Status,userSupervisorAcceptedOrRejectedNameOrPhoneNumber: string)
        {
            this.pageId=pageId;
            this.pageCount=pageCount;
            this.activePage=activePage;
            this.startPage=startPage;
            this.endPage=endPage;
            this.takeEntity=takeEntity;
            this.skipEntity=skipEntity;
            this,projectId=projectId;
            this.activityIds=activityIds;
            this.reportStatus=reportStatus;
            this.userSupervisorAcceptedOrRejectedNameOrPhoneNumber=userSupervisorAcceptedOrRejectedNameOrPhoneNumber;
        }
    pageId: number;
    pageCount: number;
    activePage: number;
    startPage: number;
    endPage: number;
    takeEntity: number;
    skipEntity: number;
    projectId: string;
    activityIds: string[];
    reportStatus: Status;
    userSupervisorAcceptedOrRejectedNameOrPhoneNumber: string;
}


export class ProgressReportDTO {
  constructor(
    progressReporterName: string,
    progressDescription: string,
    progressPercentage: number,
    progressCommitmentDate: string,
    activityIds: ShareLevelOfActivityDTO[]
  ) {
    this.progressReporterName = progressReporterName;
    this.progressDescription = progressDescription;
    this.progressPercentage = progressPercentage;
    this.progressCommitmentDate = progressCommitmentDate;
    this.activityIds = activityIds;
  }
  progressReporterName: string;
  progressDescription: string;
  progressPercentage: number;
  progressCommitmentDate: string;
  activityIds: ShareLevelOfActivityDTO[];
}

  export class ShareLevelOfActivityDTO {
    constructor(
      activityId: string, shareLevelOfActivity: number
    ) {
      this.activityId = activityId;
      this.shareLevelOfActivity = shareLevelOfActivity;
    }

    activityId: string;
    shareLevelOfActivity: number;
  }

export class PrepareShareLevelOfActivityDTO {
  shareLevelOfActivity: ShareLevelOfActivityDTO;
  isExist: boolean;

  constructor(
    shareLevelOfActivity: ShareLevelOfActivityDTO,
    isExist: boolean
  ) {
    this.shareLevelOfActivity = shareLevelOfActivity;
    this.isExist = isExist;
  }
}
