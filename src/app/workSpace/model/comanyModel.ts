import { CompanyStatusstring } from './companyModel';
export class CompanyVerificationDTo {
    constructor(companyStatus: CompanyStatusstring,message: string){
        this.companyStatus = companyStatus;
        this.message = message;
    }
    companyStatus: CompanyStatusstring;
    message: string;
}

export class CompanySelectedDTO {
    constructor(companyId: string,companyName: string,companyRegisterNumber: string,
        companyEconomicCode: string,companyStatus: CompanyStatusstring,companyAreaExpertise: CompanyType[])
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
    companyStatus: CompanyStatusstring;
    companyAreaExpertise: CompanyType[];
}

export enum CompanyType {
    health, waterSupply, housing, roadConstruction
}