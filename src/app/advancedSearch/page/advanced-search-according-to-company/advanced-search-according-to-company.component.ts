import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search-according-to-company',
  templateUrl: './advanced-search-according-to-company.component.html',
  styleUrls: ['./advanced-search-according-to-company.component.scss']
})
export class AdvancedSearchAccordingToCompanyComponent implements OnInit {

  public showList: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public openCloseList(){
    this.showList = !this.showList;
  }

}