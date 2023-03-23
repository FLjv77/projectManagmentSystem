import { DisplayPathModel } from './../../../../shared/model/displayPathModel';
import { Component, OnInit } from '@angular/core';
import { url } from 'src/assets/url/url';
import { AdvancedSearchConnecctToApiService } from 'src/app/advancedSearch/service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-activity',
  templateUrl: './information-activity.component.html',
  styleUrls: ['./information-activity.component.scss']
})
export class InformationActivityComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;

  public selectedTab: number = 0;

  constructor(
    private advancedSearchConnecctToApiService: AdvancedSearchConnecctToApiService,
    private router: Router
  ) {
    this.initProjectId();
  }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private initProjectId() {
    this.advancedSearchConnecctToApiService.projectIdSelected.subscribe((res: string) => {
      if(location.href.includes('InformationActivity')) {
        this.router.navigate(['../../projectManagement/InformationActivity'], {queryParams: { projectId: res}})
      }
    });
  }

  public checkShowProjectList(): boolean {
    let res = false;
    let comp = localStorage.getItem(url.CompanyInfo);
    if(comp) res = true;
    return res;
  }

  public setSelectedTab(tabInex: number) {
    this.selectedTab = tabInex;
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت شرکت', false, '');
    this.path2 = new DisplayPathModel('پروفایل شرکت', true, 'workspace/workSpaceProfile');
    this.path3 = new DisplayPathModel('فعالیت ها', false, '');
  }
}

