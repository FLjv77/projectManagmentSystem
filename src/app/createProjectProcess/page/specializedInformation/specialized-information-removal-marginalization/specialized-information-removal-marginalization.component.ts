import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {InputCustomStyle} from "../../../../shared/page/component/input-style/input-style.component";
import {DisplayPathModel} from "../../../../shared/model/displayPathModel";

@Component({
  selector: 'app-specialized-information-removal-marginalization',
  templateUrl: './specialized-information-removal-marginalization.component.html',
  styleUrls: ['./specialized-information-removal-marginalization.component.scss',
    '../../project-creation-levels/project-creation-levels.component.scss']
})
export class SpecializedInformationRemovalMarginalizationComponent implements OnInit {
  public inputCustomStyle: InputCustomStyle;
  public numberMosques = new FormControl();
  public meterageMosques = new FormControl();
  public meterageSchool = new FormControl();
  public numberClass = new FormControl();
  public estimatedNumberOfStudents = new FormControl();
  public meteragePark = new FormControl();
  public NumberOfFloors = new FormControl();
  public meterageClinic = new FormControl();
  public numberDoctors = new FormControl();
  public LocationFormControl = new FormControl();
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.initInputStyle();
    this.initDisplayPath();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('مدیریت پروژه', false, '');
    this.path2 = new DisplayPathModel('ساخت پروژه', false, '');
    this.path3 = new DisplayPathModel('شناسه تخصصی', false, '');
  }
  public goOnMap() {
    this.router.navigate(['../../createProject/selectLocationOnMap']);
  }
}
