import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-province-list',
  templateUrl: './drop-down-province-list.component.html',
  styleUrls: ['./drop-down-province-list.component.scss', '../drop-down-project-list/drop-down-project-list.component.scss']
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
        id: 'Basic 3'
      },
      {
        text: 'یزد',
        id: 'Basic 3'
      },
      {
        text: 'فارس',
        id: 'Basic 3'
      },
      {
        text: 'اردبیل',
        id: 'Basic 3'
      },
      {
        text: 'خوزستان',
        id: 'Basic 3'
      },
      {
        text: 'خراسان رضوی',
        id: 'Basic 3'
      },
      {
        text: 'خراسان شمالی',
        id: 'Basic 3'
      },
      {
        text: 'خراسان جنوبی',
        id: 'Basic 3'
      },
      {
        text: 'سیستان و بلوچستان',
        id: 'Basic 3'
      },
      {
        text: 'آذربایجان غربی',
        id: 'Basic 3'
      },
      {
        text: 'آذربایجان شرقی',
        id: 'Basic 3'
      },
      {
        text: 'زنجان',
        id: 'Basic 3'
      },
      {
        text: 'قزوین',
        id: 'Basic 3'
      },
      {
        text: 'همدان',
        id: 'Basic 3'
      },
      {
        text: 'کهکیلویه و بویراحمد',
        id: 'Basic 3'
      },
      {
        text: 'کردستان',
        id: 'Basic 3'
      },
      {
        text: 'لرستان',
        id: 'Basic 3'
      },
      {
        text: 'گیلان',
        id: 'Basic 3'
      },
      {
        text: 'مازندران',
        id: 'Basic 3'
      },
      {
        text: 'گلستان',
        id: 'Basic 3'
      },
      {
        text: 'کرمان',
        id: 'Basic 3'
      },
      {
        text: 'بوشهر',
        id: 'Basic 3'
      },
      {
        text: 'هرمزگان',
        id: 'Basic 3'
      },
      {
        text: 'ایلام',
        id: 'Basic 3'
      },
      {
        text: 'چهارمحال و بختیاری',
        id: 'Basic 3'
      },
      {
        text: 'قم',
        id: 'Basic 3'
      },
      {
        text: 'کرمانشاه',
        id: 'Basic 3'
      },
      {
        text: 'مرکزی',
        id: 'Basic 3'
      },
      {
        text: 'البرز',
        id: 'Basic 3'
      },
    ];

  }

}
