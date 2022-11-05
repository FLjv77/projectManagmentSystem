import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down-city-list',
  templateUrl: './drop-down-city-list.component.html',
  styleUrls: ['./drop-down-city-list.component.scss', '../drop-down-project-list/drop-down-project-list.component.scss']
})
export class DropDownCityListComponent implements OnInit, AfterViewInit {

  @Input() placeholder: string;
  @Input() addInput: boolean;
  @Output() city= new EventEmitter<string | string[]>();
  @Output() refreshCity= new EventEmitter<boolean>();
  @Input() cityList: Array<Select2OptionData>;
  public title: string = 'انتخاب پروژه';
  public valueSelect: string | string[];
  public projectData: Array<Select2OptionData>;
  public placeHolder: Select2OptionData;
  public array : Array<string | string[]> = [];

  constructor(private createrojectService:CreaterojectService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.projectData = this.cityList;
  }

  public setProject(name: string){
    this.title = name;
  }

  public remove(index: number){
    this.array.splice(index, 1);
  }

  public add(name: string | string[]){
    if (name != null) {
      this.array.push(name);
    }
  }

  public setValue(event: string | string[]){
    if(event) this.city.emit(event); this.refreshCity.emit(true);
  }

}
