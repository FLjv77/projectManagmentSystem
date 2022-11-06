import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProjectDevelopeStatus, ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { AdvancedSearchConnecctToApiService } from '../../service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';

@Component({
  selector: 'app-advanced-search-according-to-company',
  templateUrl: './advanced-search-according-to-company.component.html',
  styleUrls: ['./advanced-search-according-to-company.component.scss',
  '../../../projectManagement/page/chart-report-project/chart-report-project.component.scss']
})
export class AdvancedSearchAccordingToCompanyComponent implements OnInit {

  public showList: boolean = false;
  public projectList: ProjectSelectedDTO[] = [];

  constructor(private router: Router,
    private advancedSearchConnecctToApiService: AdvancedSearchConnecctToApiService) {
      this.subscribeProjectSelected();
  }

  ngOnInit(): void {
  }

  private subscribeProjectSelected() {
    this.advancedSearchConnecctToApiService.projectListHandel.subscribe((res: ProjectSelectedDTO[]) => {
      this.projectList = res;
    });
  }

  public openCloseList(){
    this.showList = !this.showList;
  }

  public goToEditProject(projectId: string) {
    this.router.navigate(['../../projectManagement/editProject'],  {queryParams: { projectIdEdit: projectId }})
  }
  public goToActivityProject(projectId: string) {
    this.router.navigate(['../../projectManagement/InformationActivity'], {queryParams: { projectId: projectId}})
  }
  public goToChartPage() {
    this.router.navigate(['../../projectManagement/chart'])
  }

  public showProjectState(projectStatus: ProjectDevelopeStatus): string {
    let res: string = '';
    switch(projectStatus) {
      case ProjectDevelopeStatus.dealClosed: res = 'متمم'; break;
      case ProjectDevelopeStatus.finished: res = 'تکمیل شده'; break;
      case ProjectDevelopeStatus.inProgress: res = 'درحال انجام'; break;
      case ProjectDevelopeStatus.underNegotiation: res = 'درحال مذاکره'; break;
    }

    return res;
  }
}
