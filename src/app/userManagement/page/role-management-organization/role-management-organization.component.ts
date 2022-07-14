import { Component, OnInit } from '@angular/core';
import {DisplayPathModel} from "../../../shared/model/displayPathModel";

@Component({
  selector: 'app-role-management-organization',
  templateUrl: './role-management-organization.component.html',
  styleUrls: ['./role-management-organization.component.scss', '../role-management-users/role-management-users.component.scss']
})
export class RoleManagementOrganizationComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;

  public sampleList = [
    {id: 1, isPresenter: true, isObserver: true, isSponsor: false, isEmployer: false, isAdvisor: false, isContractor: false},
    {id: 2, isPresenter: false, isObserver: false, isSponsor: false, isEmployer: true, isAdvisor: false, isContractor: true},
    {id: 3, isPresenter: false, isObserver: true, isSponsor: false, isEmployer: true, isAdvisor: true, isContractor: false},
    {id: 4, isPresenter: true, isObserver: false, isSponsor: false, isEmployer: false, isAdvisor: false, isContractor: true},
    {id: 5, isPresenter: true, isObserver: true, isSponsor: true, isEmployer: false, isAdvisor: false, isContractor: false},
    {id: 6, isPresenter: false, isObserver: true, isSponsor: false, isEmployer: true, isAdvisor: true, isContractor: true},
    {id: 7, isPresenter: false, isObserver: false, isSponsor: true, isEmployer: true, isAdvisor: false, isContractor: false},
  ];

  constructor() { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت کاربران', false, '');
    this.path2 = new DisplayPathModel('مدیریت نقش کاربران سازمانی', false, '');
  }

  public changeLockRolePresenter(index: number) {
    this.sampleList[index].isPresenter = !this.sampleList[index].isPresenter;
  }
  public changeLockRoleObserver(index: number) {
    this.sampleList[index].isObserver = !this.sampleList[index].isObserver;
  }
  public changeLockRoleSponsor(index: number) {
    this.sampleList[index].isSponsor = !this.sampleList[index].isSponsor;
  }
  public changeLockRoleEmployer(index: number) {
    this.sampleList[index].isEmployer = !this.sampleList[index].isEmployer;
  }
  public changeLockRoleAdvisor(index: number) {
    this.sampleList[index].isAdvisor = !this.sampleList[index].isAdvisor;
  }
  public changeLockRoleContactor(index: number) {
    this.sampleList[index].isContractor = !this.sampleList[index].isContractor;
  }

}
