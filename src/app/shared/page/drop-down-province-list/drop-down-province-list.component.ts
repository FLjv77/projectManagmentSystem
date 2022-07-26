import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-province-list',
  templateUrl: './drop-down-province-list.component.html',
  styleUrls: ['./drop-down-province-list.component.scss']
})
export class DropDownProvinceListComponent implements OnInit {

  @Input() placeholder: string;
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
      text: 'انتخاب استان',
      id: 'none'
    }

    this.projectData = [
      {
        text: 'اصفهان',
        id: 'Basic 1'
      },
      {
        text: 'تهران',
        id: 'Basic 2'
      },
      {
        text: 'سمنان',
        id: 'Basic 2'
      }
    ];

  }

}
