import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-role-user',
  templateUrl: './drop-down-role-user.component.html',
  styleUrls: ['./drop-down-role-user.component.scss', '../drop-down-project-list/drop-down-project-list.component.scss']
})
export class DropDownRoleUserComponent implements OnInit {
  @Input() placeholder: string;
  public title: string = 'انتخاب نقش';
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
      text: 'انتخاب نقش',
      id: 'none'
    }

    this.projectData = [
      {
        text: 'نقش 1',
        id: 'Basic 1'
      },
      {
        text: 'نقش 2',
        id: 'Basic 2'
      },
      {
        text: 'نقش 3',
        id: 'Basic 2'
      }
    ];

  }
}
