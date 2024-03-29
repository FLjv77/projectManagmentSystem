import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { ConstructionTypestring, TankWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent implements OnInit {

  @Input() TankList: TankWaterShedAndCanals[];
  @Input() edit: boolean;
  public inputCustomStyle: InputCustomStyle;
  public sourceStateControl = new Array<FormControl>();
  public sourceStaffControl = new Array<FormControl>();
  public sourceVolumeControl = new Array<FormControl>();
  @Output() Tank = new EventEmitter<TankWaterShedAndCanals[]>();
  public typeProject: ConstructionTypestring;
  public TankWaterShedAndCanalsList: TankWaterShedAndCanals[] = [];

  public lengthList: number;
  public lengthListDeleted: number;

  constructor(public specializedInformationService: SpecializedInformationService) {
    this.specializedInformationService.sourceBoolean.subscribe((res: boolean) => {
      if (res == true) {
        this.addList();
      }
    });
  }

  ngOnInit(): void {
    this.initInputStyle();
    this.TankWaterShedAndCanalsList = new Array<TankWaterShedAndCanals>;
    this.getData();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getData(){
    if (this.TankList) {
      this.TankWaterShedAndCanalsList = this.TankList;
      for (let i = 0; i < this.TankWaterShedAndCanalsList.length; i++) {
        this.sourceVolumeControl.push(new FormControl());
        this.sourceStaffControl.push(new FormControl());
        this.sourceStateControl.push(new FormControl());

        this.sourceVolumeControl[i].setValue(this.TankWaterShedAndCanalsList[i].tankVolume);
        this.sourceStaffControl[i].setValue(this.TankWaterShedAndCanalsList[i].tankMaterialType);
        this.sourceStateControl[i].setValue(this.TankWaterShedAndCanalsList[i].currentTankStatus);
      }
    }
  }

  public setValue(state: ConstructionTypestring,index:number): boolean {
    let res = false;
    if(this.TankWaterShedAndCanalsList) {
      if(this.TankWaterShedAndCanalsList[index].constructionType == state) res = true;
    }
    return res;
  }

  private subscribeChangeFormCoontrol(i :number) {
    if (this.typeProject == 0 || this.typeProject == 1 || this.typeProject == 2
      || this.lengthList != this.lengthListDeleted) {
      this.checkValidationForm(i);
    }

    this.sourceStateControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.sourceStaffControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.sourceVolumeControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });
  }

  private checkValidationForm(i: number) {
    if(
      this.sourceStateControl[i].value &&
      this.sourceStaffControl[i].value &&
      this.sourceVolumeControl[i].value
    ) {
      this.Tank.emit(this.TankWaterShedAndCanalsList);
    } else {
      this.Tank.emit(this.TankWaterShedAndCanalsList);
    }
  }

  public addList(){
    this.sourceStateControl.push(new FormControl());
    this.sourceStaffControl.push(new FormControl());
    this.sourceVolumeControl.push(new FormControl());
    this.TankWaterShedAndCanalsList.push(new TankWaterShedAndCanals());
    this.lengthList = this.TankWaterShedAndCanalsList.length;
  }

  public setTypeProject(state: ConstructionTypestring,index: number){
    this.typeProject = state;
    this.TankWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public setSourceVolume(event: string, index: number) {
    this.TankWaterShedAndCanalsList[index].tankVolume = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setSourceStaff(event: string, index: number) {
    this.TankWaterShedAndCanalsList[index].tankMaterialType = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setSourceState(event: string, index: number) {
    this.TankWaterShedAndCanalsList[index].currentTankStatus = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public deleteList(index: number){
    this.TankWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.TankWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }

}
