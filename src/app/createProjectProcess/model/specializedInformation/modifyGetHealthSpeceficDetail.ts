import { ConstructionTypestring } from './modifyWaterShedAndCanalsSpeceficDetail';

export class HealthSpeceficDetailDTO {
  constructor(  hospitals: HealthHospital[],
    healthHouses: HealthHealthHouse[],
    insurances: HealthInsurance[],
    healthPharmacies: HealthPharmacy[],
    healthBathrooms: HealthBathroom[],
    healthToilets: HealthToilet[],
    healthVaccinations: HealthVaccination[],
    treatments:	HealthTreatment[],
    medicines: HealthMedicine[]) {

      this.hospitals = hospitals;
      this.healthHouses = healthHouses;
      this.insurances = insurances;
      this.healthPharmacies = healthPharmacies;
      this.healthBathrooms = healthBathrooms;
      this.healthToilets = healthToilets;
      this.healthVaccinations = healthVaccinations;
      this.treatments = treatments;
      this.medicines = medicines;
  }
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
    constructor() {}
    constructionType: ConstructionTypestring;
    numberofHospital: number;
    countOfFloors: number;
    countOfBeds: number;
}

export class HealthHealthHouse {
    constructor() {}
    constructionType: ConstructionTypestring;
    numberOfHealthHouse: number;
    meterage: number;
    numberOfBeds: number;
    numberOfDoctor: number;
    numberOfNurse: number;
}

export class HealthInsurance {
    constructor() {}
    numberOfPeopleCoveredByInsurance: number;
}

export class HealthPharmacy {
    constructor() {}
    numberOfPharmacy: number;
}

export class HealthBathroom {
    constructor() {}
    numberOfBathroom: number;
}

export class HealthToilet {
    constructor() {
    }
    numberOfToilet: number;
}

export class HealthVaccination {
    constructor() {}
    numberOfVaccination: number;
}

export class HealthTreatment {
    constructor() {}
    typeOfDisease:	string;
    numberOftTreatment:	string;
}

export class HealthMedicine {
    constructor() {}
    typeOfMedicine:	string;
    countOfMedicine: string;
}
