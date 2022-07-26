import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-activities',
  templateUrl: './drop-down-activities.component.html',
  styleUrls: ['./drop-down-activities.component.scss']
})
export class DropDownActivitiesComponent implements OnInit {

  @Input() placeholder: string;
  public title: string = 'انتخاب فعالیت اصلی';
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
      text: 'انتخاب فعالیت اصلی',
      id: 'none'
    }

    this.projectData = [
      {
        text: 'فعالیت 1',
        id: 'Basic 1'
      },
      {
        text: 'فعالیت 2',
        id: 'Basic 2'
      },
      {
        text: 'فعالیت 3',
        id: 'Basic 2'
      },
      {
        text: 'فعالیت 4',
        id: 'Basic 2'
      },
      {
        text: 'فعالیت 5',
        id: 'Basic 3'
      },
      {
        text: 'فعالیت 6',
        id: 'Basic 4'
      }
    ];

  }
}