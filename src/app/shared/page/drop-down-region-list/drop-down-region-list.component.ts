import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-region-list',
  templateUrl: './drop-down-region-list.component.html',
  styleUrls: ['./drop-down-region-list.component.scss']
})
export class DropDownRegionListComponent implements OnInit, AfterViewInit {

  @Input() placeholder: string;
  @Input() addInput: boolean;
  @Output() region = new EventEmitter<string | string[]>();
  @Output() refreshRegion = new EventEmitter<boolean>();
  @Input() regionList: Array<Select2OptionData>;
  public title: string = 'انتخاب پروژه';
  public valueSelect: string | string[];
  public projectData: Array<Select2OptionData>;
  public placeHolder: Select2OptionData;
  public array : Array<string | string[]>;
  constructor(private createrojectService:CreaterojectService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.projectData = this.regionList;
    if (this.placeholder) {
      this.placeHolder.text = this.placeholder;
      this.placeHolder.id = this.placeholder;
    }
  }

  public setProject(name: string){
    this.title = name;
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
     if(event) this.region.emit(event); this.refreshRegion.emit(true);
  }
}
