import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';
import { ConstructionTypestring } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { PitWaterShedAndCanals } from './../../../../../../../../createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss']
})
export class WellComponent implements OnInit {

  @Input() PitWaterList: PitWaterShedAndCanals[];
  @Input() edit: boolean;
  public inputCustomStyle: InputCustomStyle;
  public amountOfSurfaceControl = new Array<FormControl>();
  public widthWellControl = new Array<FormControl>();
  public lenPipeControl = new Array<FormControl>();
  public lenColControl = new Array<FormControl>();
  public typeProject: ConstructionTypestring;
  @Output() Pit = new EventEmitter<PitWaterShedAndCanals[]>();
  public PitWaterShedAndCanalsList: PitWaterShedAndCanals[] = [];

  public lengthList: number;
  public lengthListDeleted: number;

  constructor(public specializedInformationService: SpecializedInformationService) {
    this.specializedInformationService.wellBoolean.subscribe((res: boolean) => {
      if (res) {
        console.log(res);
        if (res == true) {
          this.addList();
        }
      }
    });
  }

  ngOnInit(): void {
    this.initInputStyle();
    this.PitWaterShedAndCanalsList = new Array<PitWaterShedAndCanals>;
    this.addList();
    this.getData();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getData() {
    if (this.PitWaterList) {
      this.PitWaterShedAndCanalsList = this.PitWaterList;
      for (let i = 0; i < this.PitWaterShedAndCanalsList.length; i++) {
        this.lenColControl.push(new FormControl());
        this.lenPipeControl.push(new FormControl());
        this.widthWellControl.push(new FormControl());
        this.amountOfSurfaceControl.push(new FormControl());

        this.lenColControl[i].setValue(this.PitWaterShedAndCanalsList[i].coolLenght);
        this.lenPipeControl[i].setValue(this.PitWaterShedAndCanalsList[i].tubeLenght);
        this.widthWellControl[i].setValue(this.PitWaterShedAndCanalsList[i].pitDiameter);
        this.amountOfSurfaceControl[i].setValue(this.PitWaterShedAndCanalsList[i].coveredLandArea);
      }
    }
  }

  public setValue(state: ConstructionTypestring, index: number): boolean {
    let res = false;
    if (this.PitWaterShedAndCanalsList) {
      if (this.PitWaterShedAndCanalsList[index].constructionType == state) res = true;
    }
    return res;
  }

  private subscribeChangeFormCoontrol(i: number) {
    if (this.typeProject == 0 || this.typeProject == 1 || this.typeProject == 2
      || this.lengthList != this.lengthListDeleted) {
      this.checkValidationForm(i);
    }

    this.amountOfSurfaceControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.widthWellControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.lenPipeControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });

    this.lenColControl[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });
  }

  private checkValidationForm(i: number) {
    if (
      this.amountOfSurfaceControl[i].value &&
      this.widthWellControl[i].value &&
      this.lenPipeControl[i].value &&
      this.lenColControl[i].value
    ) {
      this.Pit.emit(this.PitWaterShedAndCanalsList);
    } else {
      this.Pit.emit(this.PitWaterShedAndCanalsList);
    }
  }

  public addList() {
    this.amountOfSurfaceControl.push(new FormControl());
    this.widthWellControl.push(new FormControl());
    this.lenColControl.push(new FormControl());
    this.lenPipeControl.push(new FormControl());
    this.PitWaterShedAndCanalsList.push(new PitWaterShedAndCanals());
    this.lengthList = this.PitWaterShedAndCanalsList.length;
  }

  public setTypeProject(state: ConstructionTypestring, index: number) {
    this.typeProject = state;
    this.PitWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public setAmountOfSurface(event: string, index: number) {
    this.PitWaterShedAndCanalsList[index].coveredLandArea = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setLenPipe(event: string, index: number) {
    this.PitWaterShedAndCanalsList[index].tubeLenght = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setPiLenCol(event: string, index: number) {
    this.PitWaterShedAndCanalsList[index].coolLenght = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public setWidthWell(event: string, index: number) {
    this.PitWaterShedAndCanalsList[index].pitDiameter = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public deleteList(index: number) {
    this.PitWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.PitWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }
}
