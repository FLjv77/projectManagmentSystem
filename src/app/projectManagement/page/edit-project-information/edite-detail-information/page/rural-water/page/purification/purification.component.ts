import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { ConstructionTypestring, RefineryWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-purification',
  templateUrl: './purification.component.html',
  styleUrls: ['./purification.component.scss']
})
export class PurificationComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public informationStateControl = new Array<FormControl>();
  public electricStateControl = new Array<FormControl>();
  public capacityStateControl = new Array<FormControl>();
  @Output() Refinery = new EventEmitter<RefineryWaterShedAndCanals[]>();
  public typeProject: ConstructionTypestring;
  public typeProjectList: Array<number> = [];
  public RefineryWaterShedAndCanalsList: RefineryWaterShedAndCanals[] = [];

  public lengthList: number;
  public lengthListDeleted: number;

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.RefineryWaterShedAndCanalsList = new Array<RefineryWaterShedAndCanals>;
    this.addList();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private subscribeChangeFormCoontrol(i: number) {
    if (this.typeProject == 0 || this.typeProject == 1 || this.typeProject == 2 
      || this.lengthList != this.lengthListDeleted) {
      this.checkValidationForm(i);
    }

    this.informationStateControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.electricStateControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.capacityStateControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });
  }

  private checkValidationForm(i: number) {
    if(
      this.informationStateControl[i].value &&
      this.electricStateControl[i].value &&
      this.capacityStateControl[i].value
    ) {
      this.Refinery.emit(this.RefineryWaterShedAndCanalsList);
    } else {
      this.Refinery.emit(this.RefineryWaterShedAndCanalsList);
    }
  }

  public addList(){
    this.informationStateControl.push(new FormControl());
    this.electricStateControl.push(new FormControl());
    this.capacityStateControl.push(new FormControl());
    this.RefineryWaterShedAndCanalsList.push(new RefineryWaterShedAndCanals());
    this.lengthList = this.RefineryWaterShedAndCanalsList.length;
  }

  public setTypeProject(state: ConstructionTypestring,index: number){
    this.typeProject = state;
    this.RefineryWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public setInformationState(event: string, index: number) {
    this.RefineryWaterShedAndCanalsList[index].refineryStatus = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setCapacityState(event: string, index: number) {
    this.RefineryWaterShedAndCanalsList[index].refineryCapacity = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setElectricState(event: string, index: number) {
    this.RefineryWaterShedAndCanalsList[index].electricalEquipmentStatus = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public deleteList(index: number){
    this.RefineryWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.RefineryWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }
  
}
