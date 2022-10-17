import { ConstructionTypestring, DamWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-dam',
  templateUrl: './dam.component.html',
  styleUrls: ['./dam.component.scss']
})
export class DamComponent implements OnInit {

  @Input() dam: DamWaterShedAndCanals[];
  public inputCustomStyle: InputCustomStyle;
  //public damStateControl = new Array<FormControl>();
  public capacityWaterControl = new Array<FormControl>();
  public riverNameControl = new Array<FormControl>();
  public staffControl = new Array<FormControl>();
  public volumeDamControl = new Array<FormControl>();
  public description = new Array<FormControl>();
  public typeProject: ConstructionTypestring;
  public typeProjectList : Array<number> = [];
  public damWaterShedAndCanalsList : DamWaterShedAndCanals[];

  public lengthList: number;
  public lengthListDeleted: number;

  @Output() damList = new EventEmitter<DamWaterShedAndCanals[]>();

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
    this.damWaterShedAndCanalsList = new Array<DamWaterShedAndCanals>;
    this.addList();
    this.getData();
  }

  public getData(){
    if (this.dam) {
      this.damWaterShedAndCanalsList = this.dam;
      for (let i = 0; i < this.damWaterShedAndCanalsList.length; i++) {
        this.description.push(new FormControl());
        this.capacityWaterControl.push(new FormControl());
        this.riverNameControl.push(new FormControl());
        this.staffControl.push(new FormControl());
        this.volumeDamControl.push(new FormControl());

        this.description[i].setValue(this.damWaterShedAndCanalsList[i].damDescription);
        this.capacityWaterControl[i].setValue(this.damWaterShedAndCanalsList[i].wateringCapacity);
        this.riverNameControl[i].setValue(this.damWaterShedAndCanalsList[i].riverName);
        this.staffControl[i].setValue(this.damWaterShedAndCanalsList[i].damMaterialType);
        this.volumeDamControl[i].setValue(this.damWaterShedAndCanalsList[i].damTankVolume);
      }
    }
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

    this.capacityWaterControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.riverNameControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.staffControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.volumeDamControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.description[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

  }

  private checkValidationForm(i: number) {
    if(this.capacityWaterControl[i].value &&this.riverNameControl[i].value &&
      this.staffControl[i].value &&this.volumeDamControl[i].value && this.description[i].value
    ) {
      this.damList.emit(this.damWaterShedAndCanalsList);
    } else {
      this.damList.emit(this.damWaterShedAndCanalsList);
    }
  }

  public addList() {
    this.description.push(new FormControl());
    this.volumeDamControl.push(new FormControl());
    this.staffControl.push(new FormControl());
    this.riverNameControl.push(new FormControl());
    this.capacityWaterControl.push(new FormControl());
    this.damWaterShedAndCanalsList.push(new DamWaterShedAndCanals());
    this.lengthList = this.damWaterShedAndCanalsList.length;
  }

  public setTypeProject(state: ConstructionTypestring,index: number){
    this.typeProject = state;
    this.damWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public deleteList(index: number){
    this.damWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.damWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }

  public setCapacityWater(event: string, index: number) {
    this.damWaterShedAndCanalsList[index].wateringCapacity = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setDescription(event: string, index: number) {
    this.damWaterShedAndCanalsList[index].damDescription = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setStaff(event: string, index: number) {
    this.damWaterShedAndCanalsList[index].damMaterialType = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setVolumeDam(event: string, index: number) {
    this.damWaterShedAndCanalsList[index].damTankVolume = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }

  public setRiverName(event: string, index: number) {
    this.damWaterShedAndCanalsList[index].riverName = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setValue(state: ConstructionTypestring,index:number): boolean {
    let res = false;
    if(this.damWaterShedAndCanalsList) {
      if(this.damWaterShedAndCanalsList[index].constructionType == state) res = true;
    }
    return res;
  }

}
