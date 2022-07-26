import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-village-list',
  templateUrl: './drop-down-village-list.component.html',
  styleUrls: ['./drop-down-village-list.component.scss']
})
export class DropDownVillageListComponent implements OnInit {

  @Input() placeholder: string;
  @Input() addInput: boolean;
  public title: string = 'انتخاب پروژه';
  public projectData: Array<Select2OptionData>;
  public placeHolder: Select2OptionData;
  constructor() { }

  ngOnInit(): void {
    this.initProjectList();
  }

  public setProject(name: string){
    this.title = name;
  }

  private initProjectList() {
    this.placeHolder = {
      text: 'انتخاب روستا',
      id: 'none'
    }

    this.projectData = [
      {
        text: 'روستا1',
        id: 'Basic 1'
      },
      {
        text: 'روستا2',
        id: 'Basic 2'
      },
      {
        text: 'روستا3',
        id: 'Basic 2'
      }
    ];

  }

}
