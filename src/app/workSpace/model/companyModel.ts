import { DynamicProjectFilterDTO } from 'src/app/projectManagement/model/project/projectDto';
import { CompanyType } from './../../auth/model/companyUserDTO';
import { DateTime } from '../../shared/model/dateTime';

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

export class ProjectSelectedDTOResualt {
  userSelectedDtos: UserSelectedDtos[];
  dynamicProjectFilterDTO: DynamicProjectFilterDTO;
  pageId: number;
  pageCount: number;
  activePage: number;
  startPage: number;
  endPage: number;
  takeEntity: number;
  skipEntity: number;
}

export class UserSelectedDtos {
  createDate: DateTime;
  lastUpdateDate: DateTime;
  roleNames: string[];
  userId: string;
  userIsActivated: boolean;
  userName: string;
}
