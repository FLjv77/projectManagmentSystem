import { HandelErrorTDO } from './../../shared/service/handleError/handle-display-error.service';
export class CompanyUserRegisterDTO{
    constructor(createCompanyDTO: CreateCompanyDTO,userName: string,phoneNumber: string,password: string){
        this.createCompanyDTO = createCompanyDTO;
        this.userName = userName;
        this.phoneNumber =phoneNumber;
        this.password =password;
    }
    createCompanyDTO: CreateCompanyDTO;
    userName: string;
    phoneNumber: string;
    password: string;
}

export class CreateCompanyDTO {
    constructor(companyName: string,companyRegisterNumber: string,companyEconomicCode: string,companyAreaExpertise: CompanyType[]){
        this.companyName = companyName;
        this.companyRegisterNumber = companyRegisterNumber;
        this.companyEconomicCode = companyEconomicCode;
        this.companyAreaExpertise = companyAreaExpertise;
    }
    companyName: string;
    companyRegisterNumber: string;
    companyEconomicCode: string;
    companyAreaExpertise: CompanyType[];
}

export enum CompanyType {
    health, waterSupply, housing, roadConstruction
}
