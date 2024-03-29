import { FountainWaterShedAndCanals, ConstructionTypestring } from 'src/app/createProjectProcess/model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';
import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { SpecializedInformationService } from 'src/app/createProjectProcess/service/specializedInformation/specialized-information.service';

@Component({
  selector: 'app-fountain',
  templateUrl: './fountain.component.html',
  styleUrls: ['./fountain.component.scss']
})
export class FountainComponent implements OnInit {

  @Input() Fountain: FountainWaterShedAndCanals[];
  @Input() edit: boolean;
  public inputCustomStyle: InputCustomStyle;
  public description = new Array<FormControl>();
  @Output() fountainList = new EventEmitter<FountainWaterShedAndCanals[]>();
  public typeProject: ConstructionTypestring;
  public typeProjectList: Array<number> =[];
  public FountainWaterShedAndCanalsList: FountainWaterShedAndCanals[];

  public lengthList: number;
  public lengthListDeleted: number;


  constructor(public specializedInformationService: SpecializedInformationService) {
    this.specializedInformationService.fountainBoolean.subscribe((res: boolean) => {
      if (res == true) {
        this.addList();
      }
    });
  }

  ngOnInit(): void {
    this.initInputStyle();
    this.FountainWaterShedAndCanalsList = new Array<FountainWaterShedAndCanals>;
    this.getData();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public getData(){
    if (this.Fountain) {
      this.FountainWaterShedAndCanalsList = this.Fountain;
      for (let i = 0; i < this.FountainWaterShedAndCanalsList.length; i++) {
        this.description.push(new FormControl());
        this.description[i].setValue(this.FountainWaterShedAndCanalsList[i].description);
      }
    }
  }

  public setValue(state: ConstructionTypestring,index:number): boolean {
    let res = false;
    if(this.FountainWaterShedAndCanalsList) {
      if(this.FountainWaterShedAndCanalsList[index].constructionType == state) res = true;
    }
    return res;
  }

  private subscribeChangeFormCoontrol(i:number) {
    if (this.typeProject == 0 || this.typeProject == 1 || this.typeProject == 2
      || this.lengthList != this.lengthListDeleted) {
      this.checkValidationForm(i);
    }

    this.description[i].valueChanges.subscribe(() => {
      this.checkValidationForm(i);
    });
  }

  private checkValidationForm(i: number) {
    if(this.description[i].value) {
      this.fountainList.emit(this.FountainWaterShedAndCanalsList);
    } else {
      this.fountainList.emit(this.FountainWaterShedAndCanalsList);
    }
  }

  public addList(){
    this.description.push(new FormControl());
    this.FountainWaterShedAndCanalsList.push(new FountainWaterShedAndCanals());
    this.lengthList = this.FountainWaterShedAndCanalsList.length;
  }

  public setTypeProject(state: ConstructionTypestring,index: number){
    this.typeProject = state;
    this.FountainWaterShedAndCanalsList[index].constructionType = state;
    this.subscribeChangeFormCoontrol(index);
  }

  public setDescription(event: string, index: number) {
    this.FountainWaterShedAndCanalsList[index].description = event;
    this.subscribeChangeFormCoontrol(index);
  }

  public deleteList(index: number){
    this.FountainWaterShedAndCanalsList.splice(index, 1);
    this.lengthListDeleted = this.FountainWaterShedAndCanalsList.length;
    this.subscribeChangeFormCoontrol(index);
  }
}
