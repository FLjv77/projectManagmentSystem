import { ConstructionTypestring } from './modifyWaterShedAndCanalsSpeceficDetail';

export class HealthSpeceficDetailDTO {
    hospitals: HealthHospital[];
    healthHouses: HealthHealthHouse[];
    insurances: HealthInsurance[];
    healthPharmacies: HealthPharmacy[];
    healthBathrooms: HealthBathroom[];
    healthToilets: HealthToilet[];
    healthVaccinations: HealthVaccination[];
    treatments:	HealthTreatment[];
    medicines: HealthMedicine[];
}

export class HealthHospital {
    constructor(constructionType: ConstructionTypestring,numberofHospital: number,countOfFloors: number,countOfBeds: number){
        this.constructionType = constructionType;
        this.numberofHospital = numberofHospital;
        this.countOfBeds = countOfBeds;
        this.countOfFloors = countOfFloors;
    }
    constructionType: ConstructionTypestring;
    numberofHospital: number;
    countOfFloors: number;
    countOfBeds: number;
}

export class HealthHealthHouse {
    constructor(constructionType: ConstructionTypestring,numberOfHealthHouse: number,
                meterage: number,numberOfBeds: number,numberOfDoctor: number,numberOfNurse: number){
        this.constructionType = constructionType;
        this.numberOfHealthHouse = numberOfHealthHouse;
        this.meterage = meterage;
        this.numberOfBeds = numberOfBeds;
        this.numberOfDoctor = numberOfDoctor;
        this.numberOfNurse = numberOfNurse;
    }
    constructionType: ConstructionTypestring;
    numberOfHealthHouse: number;
    meterage: number;
    numberOfBeds: number;
    numberOfDoctor: number;
    numberOfNurse: number;
}

export class HealthInsurance {
    constructor(numberOfPeopleCoveredByInsurance: number){
        this.numberOfPeopleCoveredByInsurance = numberOfPeopleCoveredByInsurance;
    }
    numberOfPeopleCoveredByInsurance: number;
}

export class HealthPharmacy {
    constructor(numberOfPharmacy: number){
        this.numberOfPharmacy = numberOfPharmacy;
    }
    numberOfPharmacy: number;
}

export class HealthBathroom {
    constructor(numberOfBathroom: number){
        this.numberOfBathroom = numberOfBathroom;
    }
    numberOfBathroom: number;
}

export class HealthToilet {
    constructor(numberOfToilet: number){
        this.numberOfToilet = numberOfToilet;
    }
    numberOfToilet: number;
}

export class HealthVaccination {
    constructor(numberOfVaccination: number){
        this.numberOfVaccination = numberOfVaccination;
    }
    numberOfVaccination: number;
}

export class HealthTreatment {
    constructor(typeOfDisease:	string,numberOftTreatment:	string){
        this.typeOfDisease = typeOfDisease;
        this.numberOftTreatment = numberOftTreatment;
    }
    typeOfDisease:	string;
    numberOftTreatment:	string;
}

export class HealthMedicine {
    constructor(typeOfMedicine:	string,countOfMedicine: string){
        this.typeOfMedicine = typeOfMedicine;
        this.countOfMedicine = countOfMedicine;
    }
    typeOfMedicine:	string;
    countOfMedicine: string;
}