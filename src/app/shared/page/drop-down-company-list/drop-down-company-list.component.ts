import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drop-down-company-list',
  templateUrl: './drop-down-company-list.component.html',
  styleUrls: ['./drop-down-company-list.component.scss', '../drop-down-project-list/drop-down-project-list.component.scss']
})
export class DropDownCompanyListComponent implements OnInit {

  @Input() customStyle: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.customStyle)
  }

}
