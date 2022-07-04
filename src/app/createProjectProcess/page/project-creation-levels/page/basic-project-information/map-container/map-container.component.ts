import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {Router} from "@angular/router";

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit, AfterViewInit  {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  // @ts-ignore
  private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
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
}
