import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Select2OptionData} from "ng-select2";

@Component({
  selector: 'app-drop-down-project-list',
  templateUrl: './drop-down-project-list.component.html',
  styleUrls: ['./drop-down-project-list.component.scss']
})
export class DropDownProjectListComponent implements OnInit {

  @Input() placeholder: string;
  public title: string = 'انتخاب پروژه';
  public projectData: Array<Select2OptionData>;
  public placeHolder: Select2OptionData;
  @Output() parentid = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.initProjectList();
  }

  public setProject(name: string){
    this.title = name;
  }

  private initProjectList() {
    this.placeHolder = {
      text: 'انتخاب پروژه',
      id: 'none'
    }

    this.projectData = [
      {
        text: 'پروژه 1',
        id: 'Basic 1'
      },
      {
        text: 'پروژه 2',
        id: 'Basic 2'
      },
      {
        text: 'پروژه 3',
        id: 'Basic 2'
      },
      {
        text: 'پروژه 4',
        id: 'Basic 2'
      },
      {
        text: 'پروژه 5',
        id: 'Basic 3'
      },
      {
        text: 'پروژه 6',
        id: 'Basic 4'
      }
    ];

  }
}
