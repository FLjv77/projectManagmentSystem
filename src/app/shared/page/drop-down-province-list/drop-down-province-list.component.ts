import { ApiResult } from 'src/app/auth/model/authDTO';
import { CreaterojectService } from 'src/app/createProjectProcess/service/projectCreationLevels/createroject.service';
import { Select2OptionData } from 'ng-select2';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { event } from 'jquery';

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
  @Output() province= new EventEmitter<string | string[]>();

  constructor(private createrojectService:CreaterojectService) { }

  ngOnInit(): void {
    this.initProjectList();
  }

  public setProject(name: string){
    this.title = name;
  }

  private initProjectList() {
    this.createrojectService.SearchLocation().subscribe((res:ApiResult<any>)=>{
      console.log(res);
      
      //this.placeHolder = res.data;
    })
    this.placeHolder = {
      text: 'انتخاب استان',
      id: 'none'
    }

    this.projectData = [
      {
        text: 'اصفهان',
        id: 'اصفهان'
      },
      {
        text: 'تهران',
        id: 'تهران'
      },
      {
        text: 'سمنان',
        id: 'سمنان'
      },
      {
        text: 'یزد',
        id: 'یزد'
      },
      {
        text: 'فارس',
        id: 'فارس'
      },
      {
        text: 'اردبیل',
        id: 'اردبیل'
      },
      {
        text: 'خوزستان',
        id: 'خوزستان'
      },
      {
        text: 'خراسان رضوی',
        id: 'خراسان رضوی'
      },
      {
        text: 'خراسان شمالی',
        id: 'خراسان شمالی'
      },
      {
        text: 'خراسان جنوبی',
        id: 'خراسان جنوبی'
      },
      {
        text: 'سیستان و بلوچستان',
        id: 'سیستان و بلوچستان'
      },
      {
        text: 'آذربایجان غربی',
        id: 'آذربایجان غربی'
      },
      {
        text: 'آذربایجان شرقی',
        id: 'آذربایجان شرقی'
      },
      {
        text: 'زنجان',
        id: 'زنجان'
      },
      {
        text: 'قزوین',
        id: 'قزوین'
      },
      {
        text: 'همدان',
        id: 'همدان'
      },
      {
        text: 'کهکیلویه و بویراحمد',
        id: 'کهکیلویه و بویراحمد'
      },
      {
        text: 'کردستان',
        id: 'کردستان'
      },
      {
        text: 'لرستان',
        id: 'لرستان'
      },
      {
        text: 'گیلان',
        id: 'گیلان'
      },
      {
        text: 'مازندران',
        id: 'مازندران'
      },
      {
        text: 'گلستان',
        id: 'گلستان'
      },
      {
        text: 'کرمان',
        id: 'کرمان'
      },
      {
        text: 'بوشهر',
        id: 'بوشهر'
      },
      {
        text: 'هرمزگان',
        id: 'هرمزگان'
      },
      {
        text: 'ایلام',
        id: 'ایلام'
      },
      {
        text: 'چهارمحال و بختیاری',
        id: 'چهارمحال و بختیاری'
      },
      {
        text: 'قم',
        id: 'قم'
      },
      {
        text: 'کرمانشاه',
        id: 'کرمانشاه'
      },
      {
        text: 'مرکزی',
        id: 'مرکزی'
      },
      {
        text: 'البرز',
        id: 'البرز'
      },
    ];

  }
  public setValue($evnet: string | string[]){
    this.province.emit($evnet);
  }

}
