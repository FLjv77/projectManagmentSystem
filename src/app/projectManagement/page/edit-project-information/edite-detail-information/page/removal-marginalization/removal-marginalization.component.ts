import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { projectType } from 'src/app/createProjectProcess/model/EnumForSpecializeInformation/EnumForSpecializeInformation';

@Component({
  selector: 'app-removal-marginalization',
  templateUrl: './removal-marginalization.component.html',
  styleUrls: ['./removal-marginalization.component.scss']
})
export class RemovalMarginalizationComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public numberMosques = new FormControl();
  public meterageMosques = new FormControl();
  public meterageSchool = new FormControl();
  public numberClass = new FormControl();
  public estimatedNumberOfStudents = new FormControl();
  public meteragePark = new FormControl();
  public NumberOfFloors = new FormControl();
  public meterageClinic = new FormControl();
  public numberDoctors = new FormControl();
  public numberPark = new FormControl();
  public numberClinic = new FormControl();
  public typeProject: projectType;
  public arrayList0: Array<string> = ['2223'];
  public arrayList1: Array<string> = ['2223'];
  public arrayList2: Array<string> = ['2223'];
  public arrayList3: Array<string> = ['2223'];
  private projectId: string|null;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    //this.getQuery();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  // private getQuery(){
  //   this.projectId = this.activeRoute.snapshot.queryParamMap.get("projectId");
  // }

  public setTypeProject(state: projectType){
    this.typeProject = state;
  }

  public addList(listName: Array<string>){
    listName.push('222');
  }

  public deleteList(list: Array<string>,index: number){
    list.splice(index, 1);
  }

}
