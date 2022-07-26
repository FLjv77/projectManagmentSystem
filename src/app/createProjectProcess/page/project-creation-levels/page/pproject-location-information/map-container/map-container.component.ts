import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {Router} from "@angular/router";
import {DisplayPathModel} from "../../../../../../shared/model/displayPathModel";

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss', '../../../../../../../assets/style/base.scss']
})
export class MapContainerComponent implements OnInit, AfterViewInit  {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initMap();
    this.initDisplayPath();
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
    this.path1 = new DisplayPathModel('مدیریت پروژ', false, '');
    this.path2 = new DisplayPathModel('ساخت پروژه', false, '');
    this.path3 = new DisplayPathModel('انتخاب موقعیت', false, '');
  }
}
