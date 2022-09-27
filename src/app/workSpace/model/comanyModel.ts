export class CompanyVerificationDTo {
    constructor(companyStatus: CompanyStatus,message: string){
        this.companyStatus = companyStatus;
        this.message = message;
    }
    companyStatus: CompanyStatus;
    message: string;
}

export enum CompanyStatus {
    notChecked, checkedAndConfirmed, checkedAndRejected
}

export class CompanySelectedDTO {
    constructor(companyId: string,companyName: string,companyRegisterNumber: string,
        companyEconomicCode: string,companyStatus: CompanyStatus,companyAreaExpertise: CompanyType[])
        {
            this.companyId = companyId;
            this.companyName = companyName;
            this.companyRegisterNumber = companyRegisterNumber;
            this.companyEconomicCode = companyEconomicCode;
            this.companyStatus = companyStatus;
            this.companyAreaExpertise = companyAreaExpertise;
        }
    companyId: string;
    companyName: string;
    companyRegisterNumber: string;
    companyEconomicCode: string;
    companyStatus: CompanyStatus;
    companyAreaExpertise: CompanyType[];
}

export enum CompanyType {
    health, waterSupply, housing, roadConstruction
}