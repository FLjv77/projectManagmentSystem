import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-village-list',
  templateUrl: './drop-down-village-list.component.html',
  styleUrls: ['./drop-down-village-list.component.scss', '../drop-down-project-list/drop-down-project-list.component.scss']
})
export class DropDownVillageListComponent implements OnInit , AfterViewInit {

  @Input() placeholder: string;
  @Input() addInput: boolean;
  @Output() village = new EventEmitter<string | string[]>();
  @Input() villageList: Array<Select2OptionData>;
  public title: string = 'انتخاب پروژه';
  public projectData: Array<Select2OptionData>;
  public placeHolder: Select2OptionData;
  constructor(private createrojectService:CreaterojectService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createrojectService.villageList.subscribe((res:Array<Select2OptionData>)=>{
      this.projectData = res;
    })
  }

  public setProject(name: string){
    this.title = name;
  }

  public setValue($event: string|string[]){
    this.village.emit($event);
  }
}
