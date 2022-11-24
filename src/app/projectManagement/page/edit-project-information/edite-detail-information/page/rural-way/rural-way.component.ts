import { AlertDialogBySweetAlertService } from './../../../../../../shared/service/alertDialog/alert-dialog-by-sweet-alert.service';
import { ProjectSelectedDTO } from 'src/app/projectManagement/model/project/projectDto';
import { Router } from '@angular/router';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { CommonDataForCreateProjectService } from 'src/app/createProjectProcess/service/commonData/commonDataForCreateProject/common-data-for-create-project.service';
import { ActivatedRoute } from '@angular/router';
import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { RoadTypestring, RuralRoad } from './../../../../../../createProjectProcess/model/specializedInformation/modifyRuralRoadSpeceficDetail';
import { ConstructionTypestring } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { FormControl } from '@angular/forms';
import { projectType } from './../../../../../../createProjectProcess/model/EnumForSpecializeInformation/EnumForSpecializeInformation';
import { RuralRoadSpeceficDetailDTO } from 'src/app/createProjectProcess/model/specializedInformation/modifyRuralRoadSpeceficDetail';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-rural-way',
  templateUrl: './rural-way.component.html',
  styleUrls: ['./rural-way.component.scss']
})
export class RuralWayComponent implements OnInit {

  @Output() refreshList= new EventEmitter<boolean>();
  @Input() projectIdSelect: string|string[];
  public inputCustomStyle: InputCustomStyle;
  public roadWidth = new Array<FormControl>();
  public roadLength = new Array<FormControl>();
  public LocationFormControl = new FormControl();
  public projectId: string|null;
  public typeProject: projectType;
  public targetWayTypeList: Array<number> = [];
  public ruralRoadList :Array<RuralRoad>;
  private locations: Location[];
  private index: number;
  @Input() data: ProjectSelectedDTO;
  public edit: boolean;

  constructor(private router:Router, private activeRouting:ActivatedRoute,
              private specializedInformationService:SpecializedInformationService,
              private commonDataForCreateProjectService: CommonDataForCreateProjectService,
              private alertDialogBySweetAlertService:AlertDialogBySweetAlertService) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.ruralRoadList = new Array<RuralRoad>;
    this.getData();
  }

  public getData(){    
    if (this.data.projectSpeceficDetail.ruralRoads) {
      this.ruralRoadList = this.data.projectSpeceficDetail.ruralRoads;
      for (let i = 0; i < this.ruralRoadList.length; i++) {
        this.roadWidth.push(new FormControl());
        this.roadLength.push(new FormControl());

        this.roadWidth[i].setValue(this.ruralRoadList[i].roadWidth);
        this.roadLength[i].setValue(this.ruralRoadList[i].roadLength);
      }
    }
    else{
      this.addList();
    }
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public setValue(state: ConstructionTypestring,index:number): boolean {
    let res = false;
    if(this.ruralRoadList) {
      if(this.ruralRoadList[index].constructionType == state) res = true;
    }
    return res;
  }

  public checkValidation(): boolean {
    let res = true;
    for(let i=0; i<this.ruralRoadList.length; i++) {
      if(
        this.roadWidth[i].value &&
        this.roadLength[i].value) res = true;
        else {
          res = false; break;
        }
    }
    return res;
  }

  public setWayType1(state: RoadTypestring,index: number) {
    this.ruralRoadList[index].currentRoadType = state;
  }

  public setWayType2(state: RoadTypestring,index: number) {
    this.ruralRoadList[index].targetRoadType = state;
  }

  public setTypeProject(state: ConstructionTypestring, index: number) {
    this.ruralRoadList[index].constructionType = state;
  }

  public set_roadWidth(state: string, index: number) {
    this.ruralRoadList[index].roadWidth = Number(state);
  }

  public set_roadLength(state: string, index: number) {
    this.ruralRoadList[index].roadLength = Number(state);
    this.ruralRoadList[this.index].latitude = 0;
    this.ruralRoadList[this.index].roadLongitude = 0;
  }

  public addList() {
    this.roadWidth.push(new FormControl());
    this.roadLength.push(new FormControl());
    this.ruralRoadList.push(new RuralRoad());
  }

  public deleteList(index: number){
    this.ruralRoadList.splice(index, 1);
    this.roadWidth.splice(index, 1);
    this.roadLength.splice(index, 1);
  }

  public goOnMap(i: number) {
    this.index = i;
    let projectType = this.activeRouting.snapshot.queryParamMap.get('type');
    let id = this.activeRouting.snapshot.queryParamMap.get('targetId');

    this.router.navigate(['../../createProject/startCreatProject'], {queryParams: {type: projectType, targetId: id}});

    this.router.navigate(['../../createProject/selectLocationOnMap'], {queryParams: {type: projectType, targetId: id}});
  }

  private getLocation() {
    let location = this.activeRouting.snapshot.queryParamMap.get('locations');
    let id = this.activeRouting.snapshot.queryParamMap.get('targetId');
    if (location !== null) {
      this.locations[this.index] = JSON.parse(location);
      //this.ruralRoadList[this.index].latitude = this.locations[0].x_pos;
      //this.ruralRoadList[this.index].roadLongitude = this.locations[0].y_pos;
    }

    this.router.navigate(['../../createProject/startCreatProject'], {queryParams: {type: projectType, targetId: id}});
  }

  public sendWayInfo(){
    this.specializedInformationService.ModifyRuralRoadSpeceficDetail(this.projectId, new RuralRoadSpeceficDetailDTO(this.ruralRoadList))
    .subscribe((res: ApiResult<RuralRoadSpeceficDetailDTO>)=>{

      if(res.isSuccess && res.statusCode == 200) {
        setTimeout(() => {
          document.getElementById('stackHolderInformation')?.click();
        }, 200);
      }
    });
  }

  public saved(){
    this.editList();
    this.edit = false;
  }

  public editForm(){
    this.edit = true;
  }

  public editList(){
    if (this.checkedRoadWidth()==true && this.checkedRoadLength()==true) {
      this.specializedInformationService.ModifyRuralRoadSpeceficDetail1(this.projectIdSelect,
        new RuralRoadSpeceficDetailDTO(this.ruralRoadList)).subscribe((res:ApiResult<RuralRoadSpeceficDetailDTO>)=>{
          this.ruralRoadList = res.data.ruralRoads;
        });
      this.refreshList.emit(true);
    }
    else {
      this.alertDialogBySweetAlertService.showErrorAlert('تمامی فیلد ها رو پرکنید')
    }
    
  }

  public checkedRoadLength(): any{
    let res : boolean = true;
    console.log(this.roadLength);
    
    for (let i = 0; i < this.roadLength.length; i++) {
      if (this.roadLength[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }

  public checkedRoadWidth(): any{
    console.log(this.roadWidth);
    let res : boolean = true;
    for (let i = 0; i < this.roadWidth.length; i++) {
      if (this.roadWidth[i].value==null) {
        res = false;
        return res;
      }
      else {
          res = true;
      }
    }
    return res;
  }
}
