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