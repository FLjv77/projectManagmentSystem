export class RevivalIndustrySpeceficDetailDTO {
    revivalIndustries:	RevivalIndustry[];
}

export class RevivalIndustry {
    constructor(amountOfFacilities: number,numberOfIndustry: number){
        this.amountOfFacilities = amountOfFacilities;
        this.numberOfIndustry = numberOfIndustry;
    }
    amountOfFacilities: number;
    numberOfIndustry: number;
}