import { ConstructionTypestring } from './modifyWaterShedAndCanalsSpeceficDetail';

export class KnowledgeBasedSpeceficDetailDTO {
    knowledgeBaseds: KnowledgeBased[];
}

export class KnowledgeBased {
    constructor(constructionType:ConstructionTypestring,countOfCompany:number,areaExpert:string,loansAndFacilities:	KnowledgeBasedLoansAndFacilities){
        this.constructionType = constructionType;
        this.countOfCompany = countOfCompany;
        this.areaExpert = areaExpert;
        this.loansAndFacilities = loansAndFacilities;
    }
    constructionType: ConstructionTypestring;
    countOfCompany:	number;
    areaExpert:	string;
    loansAndFacilities:	KnowledgeBasedLoansAndFacilities
}

export class KnowledgeBasedLoansAndFacilities {
    constructor(amount:	number,count:number,description: string){
        this.amount = amount;
        this.count = count;
        this.description = description;
    }
    amount:	number;
    count:	number;
    description: string;
}