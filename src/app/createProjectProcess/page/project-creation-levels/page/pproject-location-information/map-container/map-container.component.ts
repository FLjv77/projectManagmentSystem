import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {Router} from "@angular/router";
import {DisplayPathModel} from "../../../../../../shared/model/displayPathModel";
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss',
  '../../../../../../shared/page/display-user-path/display-user-path.component.scss',
  '../../../../../../../assets/style/base.scss']
})
export class MapContainerComponent implements OnInit, AfterViewInit  {

  public addressList: AdressInformation[];
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  public inputCustomStyle: InputCustomStyle;

  public formControl = new FormControl();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initMap();
    this.initDisplayPath();
    this.addNewLocation();
    this.initInputStyle();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 35.7, 51.4 ],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  public activeSelectLocation(event: any) {
    let selectLocation = document.getElementById('selectLocation');
    if (selectLocation) {
      selectLocation.style.display = 'block';
      selectLocation.style.left = event.clientX + 'px';
      selectLocation.style.top = event.clientY + 'px';
    }
  }

  public changeLocation() {
    let selectLocation = document.getElementById('selectLocation');
    if (selectLocation) {
      selectLocation.style.display = 'none';
    }
  }

  public backToProjectInformation() {
    this.router.navigate(['../../createProject/startCreatProject'])
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('ساخت پروژه', true, 'createProject/selectProjectType');
    this.path2 = new DisplayPathModel('اطلاعات پروژه', true, 'createProject/selectProjectType');
    this.path3 = new DisplayPathModel('انتخاب موقعیت', false, '');
  }


  public goBack() {
    history.back();
  }

  public routToPath1() {
    if (this.path1.hasLink ) this.router.navigate(['../../' + this.path1.link]);
  }
  public routToPath2() {
    if (this.path2.hasLink ) this.router.navigate(['../../' + this.path2.link]);
  }
  public routToPath3() {
    if (this.path3.hasLink ) this.router.navigate(['../../' + this.path3.link]);
  }

  public addNewLocation() {
    if(!this.addressList) this.addressList = new Array<AdressInformation>();
    this.addressList.push(
      new AdressInformation()
    );
  }

  public getInputControler(index: number): FormControl {
    return this.addressList[index].titleControler;
  }

  public getTitleAddress(index: number): string {
    return this.addressList[index].location;
  }

 }


export class AdressInformation {
  titleControler: FormControl;
  location: string;

  constructor() {
    this.titleControler = new FormControl();
  }
}
