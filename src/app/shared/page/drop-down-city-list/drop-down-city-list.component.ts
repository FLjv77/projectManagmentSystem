import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-city-list',
  templateUrl: './drop-down-city-list.component.html',
  styleUrls: ['./drop-down-city-list.component.scss', '../drop-down-project-list/drop-down-project-list.component.scss']
})
export class DropDownCityListComponent implements OnInit {

  @Input() placeholder: string;
  @Input() addInput: boolean;
  public title: string = 'انتخاب پروژه';
  public valueSelect: string | string[];
  public projectData: Array<Select2OptionData>;
  public placeHolder: Select2OptionData;
  public array : Array<string | string[]>;
  constructor() { }

  ngOnInit(): void {
    this.initProjectList();
  }

  public setProject(name: string){
    this.title = name;
  }

  private initProjectList() {
    this.placeHolder = {
      text: 'انتخاب شهر',
      id: 'none'
    }

    this.projectData = [
      {
        text: 'کاشان',
        id: 'Basic 1'
      },
      {
        text: 'نطنز',
        id: 'Basic 2'
      },
      {
        text: 'نایین',
        id: 'Basic 2'
      }
    ];
  }

  public remove(index: number){
    this.array.splice(index, 1);
  }

  public add(name: string | string[]){
    if (name != null) 
    this.array = new Array<string>();
    this.array.push(name);
  }

  public setValue(event: string | string[]){
    this.valueSelect = event;
  }

}
