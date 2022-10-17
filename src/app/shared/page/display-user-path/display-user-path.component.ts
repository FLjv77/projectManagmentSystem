import { ReportConnectionToApiService } from './../../../managementReport/service/reportConnectionToApi/report-connection-to-api.service';
import { AdvancedSearchConnecctToApiService } from 'src/app/advancedSearch/service/advancedSearchConnecctToApi/advanced-search-connecct-to-api.service';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DisplayPathModel} from "../../model/displayPathModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-display-user-path',
  templateUrl: './display-user-path.component.html',
  styleUrls: ['./display-user-path.component.scss',
  '../../../../assets/style/base.scss']
})
export class DisplayUserPathComponent implements OnInit {

  @Input() path1: DisplayPathModel;
  @Input() path2: DisplayPathModel;
  @Input() path3: DisplayPathModel;
  @Input() showProjectList: boolean;
  @Input() showCompanyList: boolean;
  @Output() companyIdSelected = new EventEmitter<string | string[]>();
  @Output() projectIdSelected = new EventEmitter<string| string[]>();
  public showProjectSelect: boolean = false;
  public companyId: string| string[];

  constructor(private router: Router,
    private activeRouting: ActivatedRoute,
    private advancedSearchConnecctToApiService:AdvancedSearchConnecctToApiService,
    private reportConnectionToApiService:ReportConnectionToApiService) {
      this.reportConnectionToApiService.CompanyIdForSuper.subscribe((res: string|string[])=>{
        this.companyId = res;
      })
    }


  ngOnInit(): void {

  }

  public getQuery(){
    let id = this.activeRouting.snapshot.queryParamMap.get('companyId');
    if (id) this.companyId = id;
  }

  public projectListAndCompanyListIsActive(): string {
    return this.showCompanyList && this.showProjectList ? 'margin-top' : '';
  }

  public routToPath1() {
    if (this.path1.hasLink) this.router.navigate(['../../' + this.path1.link]);
  }
  public routToPath2() {
    if (this.path2.hasLink ) this.router.navigate(['../../' + this.path2.link]);
  }
  public routToPath3() {
    if (this.path3.hasLink ) this.router.navigate(['../../' + this.path3.link]);
  }

  public checkPath1HasLink() {
    let res = false;
    if (this.path1) if (this.path1.hasLink) res = true;

    return res;
  }

  public getPath(path: DisplayPathModel): string {
    if (path) return path.path;
    return '';
  }

  public checkPath2HasLink() {
    let res = false;
    if (this.path2) if (this.path2.hasLink) res = true;

    return res;
  }

  public checkPath3HasLink() {
    let res = false;
    if (this.path3) if (this.path3.hasLink) res = true;

    return res;
  }

  public goBack() {
    history.back();
  }

  public setId($event: string|string[]){
    this.companyId = $event;

    this.companyIdSelected.emit($event);
    this.showProjectSelect = true;
  }
}
