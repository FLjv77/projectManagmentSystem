import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { AdressInformation } from 'src/app/createProjectProcess/page/project-creation-levels/page/pproject-location-information/map-container/map-container.component';



const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-edit-project-location',
  templateUrl: './edit-project-location.component.html',
  styleUrls: ['./edit-project-location.component.scss',
  '../../../../shared/page/display-user-path/display-user-path.component.scss',
  '../../../../../assets/style/base.scss']
})
export class EditProjectLocationComponent implements OnInit {
  @Input() selectedX: number;
  @Input() selectedY: number;
  public addressList: AdressInformation;
  layer: any;

  constructor() { }

  ngOnInit(): void {
  }
  public activeSelectLocation() {
    const marker = L.marker([this.selectedX, this.selectedY]);

    this.map.addLayer(marker);
    if(this.layer) this.map.removeLayer(this.layer);
    this.layer = marker;
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.selectedX, this.selectedY],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);


    this.activeSelectLocation();

    this.map.on("click", (e: any) => {
      this.selectedX = e.latlng.lat;
      this.selectedY = e.latlng.lng;
    });
  }
}
