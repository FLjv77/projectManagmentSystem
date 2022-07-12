import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search-according-to-company',
  templateUrl: './advanced-search-according-to-company.component.html',
  styleUrls: ['./advanced-search-according-to-company.component.scss']
})
export class AdvancedSearchAccordingToCompanyComponent implements OnInit {

  public showList: boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  public openCloseList(){
    this.showList = !this.showList;
  }

  public goToEditProject() {
    this.router.navigate(['../../projectManagement/editProject'])
  }
  public goToActivityProject() {
    this.router.navigate(['../../projectManagement/InformationActivity'])
  }
  public goToChartPage() {
    this.router.navigate(['../../projectManagement/chart'])
  }

}
