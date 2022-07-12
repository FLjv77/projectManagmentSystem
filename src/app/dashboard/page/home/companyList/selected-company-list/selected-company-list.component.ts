import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-company-list',
  templateUrl: './selected-company-list.component.html',
  styleUrls: ['./selected-company-list.component.scss', '../../../../../advancedSearch/page/advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss']
})
export class SelectedCompanyListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToWorkSpaceProfile() {
    this.router.navigate(['../../workspace/workSpaceProfile']);
  }

  public goUserList() {
    this.router.navigate(['../../userManagement/userList']);
  }

  public goProjectList() {
    this.router.navigate(['../../projectManagement/projectList']);
  }

}
