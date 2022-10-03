import { CompanyType } from './../../auth/model/companyUserDTO';

export class CompanySelectedDTO {
    constructor(){}
    companyId: string;
    companyName: string;
    companyRegisterNumber: string;
    companyEconomicCode: string;
    companyStatus: CompanyStatusstring;
    companyAreaExpertise: CompanyType[];
}

export enum CompanyStatusstring{
    notChecked, checkedAndConfirmed, checkedAndRejected
}
