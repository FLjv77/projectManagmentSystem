import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayPathModel } from '../../../shared/model/displayPathModel';

@Component({
  selector: 'app-home-super-visor',
  templateUrl: './home-super-visor.component.html',
  styleUrls: ['./home-super-visor.component.scss',
  '../../../workSpace/page/confirm-registred-company/confirm-registred-company.component.scss',
  '../../../advancedSearch/page/advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss',
  '../../../../assets/style/base.scss'
]
})
export class HomeSuperVisorComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('داشبورد', false, '');
    this.path2 = new DisplayPathModel('خانه', false, '');
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
