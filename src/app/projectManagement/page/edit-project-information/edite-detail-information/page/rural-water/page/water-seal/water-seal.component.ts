import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { ConstructionTypestring, DikeWaterShedAndCanals } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { Component, OnInit, EventEmitter,Output,Input } from '@angular/core';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';

@Component({
  selector: 'app-water-seal',
  templateUrl: './water-seal.component.html',
  styleUrls: ['./water-seal.component.scss']
})
export class WaterSealComponent implements OnInit {

  @Input() DikeList: DikeWaterShedAndCanals[];
  @Input() edit: boolean;
  @Output() Dike = new EventEmitter<DikeWaterShedAndCanals[]>();
  public inputCustomStyle: InputCustomStyle;
  public riverNameControl = new Array<FormControl>();
  public resourceSaveWaterStateControl = new Array<FormControl>();
  public pompControl = new Array<FormControl>();
  public stopFloodControl = new Array<FormControl>();
  public riverWidthControl = new Array<FormControl>();
  public stuffWaterSealControl = new Array<FormControl>();
  public widthControl = new Array<FormControl>();
  public lenControl = new Array<FormControl>();
  public heightControl = new Array<FormControl>();
  public typeProject: ConstructionTypestring;
  public DikeWaterShedAndCanalsList: DikeWaterShedAndCanals[] = [];

  public lengthList: number;
  public lengthListDeleted: number;

  constructor(public specializedInformationService: SpecializedInformationService) {
    this.specializedInformationService.sealBoolean.subscribe((res: boolean) => {
      if (res == true) {
        this.addList();
      }
    });
  }

  ngOnInit(): void {
    this.initInputStyle();
    this.DikeWaterShedAndCanalsList = new Array<DikeWaterShedAndCanals>;
    this.getData();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getData(){
    if (this.DikeList) {
      this.DikeWaterShedAndCanalsList = this.DikeList;
      for (let i = 0; i < this.DikeWaterShedAndCanalsList.length; i++) {
        this.stopFloodControl.push(new FormControl());
        this.stuffWaterSealControl.push(new FormControl());
        this.heightControl.push(new FormControl());
        this.lenControl.push(new FormControl());
        this.pompControl.push(new FormControl());
        this.riverNameControl.push(new FormControl());
        this.riverWidthControl.push(new FormControl());
        this.resourceSaveWaterStateControl.push(new FormControl());
        this.widthControl.push(new FormControl());

        this.stopFloodControl[i].setValue(this.DikeWaterShedAndCanalsList[i].dam);
        this.stuffWaterSealControl[i].setValue(this.DikeWaterShedAndCanalsList[i].dikeMaterialType);
        this.heightControl[i].setValue(this.DikeWaterShedAndCanalsList[i].height);
        this.lenControl[i].setValue(this.DikeWaterShedAndCanalsList[i].length);
        this.pompControl[i].setValue(this.DikeWaterShedAndCanalsList[i].pumping);
        this.riverNameControl[i].setValue(this.DikeWaterShedAndCanalsList[i].riverName);
        this.riverWidthControl[i].setValue(this.DikeWaterShedAndCanalsList[i].riverWidth);
        this.resourceSaveWaterStateControl[i].setValue(this.DikeWaterShedAndCanalsList[i].waterProviderResourceStatus);
        this.widthControl[i].setValue(this.DikeWaterShedAndCanalsList[i].width ? this.DikeWaterShedAndCanalsList[i].width : 0);
      }
    }
  }

  public setValue(state: ConstructionTypestring,index:number): boolean {
    let res = false;
    if(this.DikeWaterShedAndCanalsList) {
      if(this.DikeWaterShedAndCanalsList[index].constructionType == state) res = true;
    }
    return res;
  }

  private subscribeChangeFormCoontrol(i: number) {
    if (this.typeProject == 0 || this.typeProject == 1 || this.typeProject == 2
      || this.lengthList != this.lengthListDeleted) {
      this.checkValidationForm(i);
    }

    this.riverNameControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.resourceSaveWaterStateControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.pompControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.stopFloodControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.riverWidthControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.lenControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.heightControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });
  }

  private checkValidationForm(i: number) {
    if(
      this.riverNameControl[i].value &&
      this.resourceSaveWaterStateControl[i].value &&
      this.stopFloodControl[i].value &&
      this.pompControl[i].value &&
      this.riverWidthControl[i].value &&
      this.lenControl[i].value &&
      this.heightControl[i].value
    ) {
      this.Dike.emit(this.DikeWaterShedAndCanalsList);
    } else {
      this.Dike.emit(this.DikeWaterShedAndCanalsList);
    }
  }

  public addList(){
    this.riverNameControl.push(new FormControl());
    this.resourceSaveWaterStateControl.push(new FormControl());
    this.stopFloodControl.push(new FormControl());
    this.pompControl.push(new FormControl());
    this.riverWidthControl.push(new FormControl());
    this.lenControl.push(new FormControl());
    this.widthControl.push(new FormControl());
    this.heightControl.push(new FormControl());
    this.stuffWaterSealControl.push(new FormControl());
    this.DikeWaterShedAndCanalsList.push(new DikeWaterShedAndCanals());
    this.lengthList = this.DikeWaterShedAndCanalsList.length;
  }

  public setTypeProject(state: ConstructionTypestring,index: number){
    this.typeProject = state;
    this.DikeWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public setHeight(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].height = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }

  public setWidth(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].width = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }
  public setStuffWaterSeal(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].dikeMaterialType = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }
  public setRiverWidth(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].riverWidth = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }
  public setStopFlood(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].dam = event;
    this.subscribeChangeFormCoontrol(index);
  }
  public setPomp(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].pumping = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }

  public setResourceSaveWaterState(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].waterProviderResourceStatus = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setRiverName(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].riverName = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setLen(event: string, index: number) {
    this.DikeWaterShedAndCanalsList[index].length = Number(event);
    this.subscribeChangeFormCoontrol(index);
  }
  public deleteList(index: number){
    this.DikeWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.DikeWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }

}
