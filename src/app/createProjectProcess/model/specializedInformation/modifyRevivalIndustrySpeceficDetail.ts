export class RevivalIndustrySpeceficDetailDTO {
  constructor(revivalIndustries:	RevivalIndustry[]) {
    this.revivalIndustries = revivalIndustries;
  }
    revivalIndustries:	RevivalIndustry[];
}

export class RevivalIndustry {
    constructor(){
    }
    amountOfFacilities: number;
    numberOfIndustry: number;
}
