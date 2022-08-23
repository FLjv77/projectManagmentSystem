import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down-contributors',
  templateUrl: './drop-down-contributors.component.html',
  styleUrls: ['./drop-down-contributors.component.scss', '../drop-down-project-list/drop-down-project-list.component.scss']
})
export class DropDownContributorsComponent implements OnInit {

  @Input() placeholder: string;
  public title: string = 'انتخاب پروژه';
  public projectData: Array<Select2OptionData>;
  public placeHolder: Select2OptionData;
  @Output() name = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.initProjectList();
  }

  public setProject(name: string){
    this.title = name;
  }

  private initProjectList() {
    this.placeHolder = {
      text: 'انتخاب مشارکت کنندگان',
      id: 'none'
    }

    this.projectData = [
      {
        text: 'مشارکت کننده اول',
        id: 'Basic 1'
      },
      {
        text: 'مشارکت کننده دوم',
        id: 'Basic 2'
      },
      {
        text: 'مشارکت کننده سوم',
        id: 'Basic 2'
      }
    ];
    if (this.placeHolder.id != 'none') {
      this.name.emit(this.placeHolder.text);
    }

  }

}
