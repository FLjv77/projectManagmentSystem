import { ConstructionTypestring } from './modifyWaterShedAndCanalsSpeceficDetail';

export class KnowledgeBasedSpeceficDetailDTO {
  constructor(knowledgeBaseds: KnowledgeBased[]) {
    this.knowledgeBaseds = knowledgeBaseds;
  }
  knowledgeBaseds: KnowledgeBased[];
}

export class KnowledgeBased {
    constructor() {
      this.loansAndFacilities = new KnowledgeBasedLoansAndFacilities();
    }
    constructionType: ConstructionTypestring;
    countOfCompany:	number;
    areaExpert:	string;
    loansAndFacilities:	KnowledgeBasedLoansAndFacilities
}

export class KnowledgeBasedLoansAndFacilities {
    constructor(){}
    amount:	number;
    count:	number;
    description: string;
}
