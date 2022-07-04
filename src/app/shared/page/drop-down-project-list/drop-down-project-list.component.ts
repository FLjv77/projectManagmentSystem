import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-project-list',
  templateUrl: './drop-down-project-list.component.html',
  styleUrls: ['./drop-down-project-list.component.scss']
})
export class DropDownProjectListComponent implements OnInit {

  public title: string = 'انتخاب پروژه';

  constructor() { }

  ngOnInit(): void {
  }

  public setProject(name: string){
    this.title = name;
  }

}
