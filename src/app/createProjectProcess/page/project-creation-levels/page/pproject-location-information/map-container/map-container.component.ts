import { NumberFormaterService } from './../../../../../../shared/service/number/number-formater.service';
import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {ActivatedRoute, Router} from "@angular/router";
import {DisplayPathModel} from "../../../../../../shared/model/displayPathModel";
import { FormControl } from '@angular/forms';
import { InputCustomStyle } from 'src/app/shared/page/component/input-style/input-style.component';


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
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss',
  '../../../../../../shared/page/display-user-path/display-user-path.component.scss',
  '../../../../../../../assets/style/base.scss']
})
export class MapContainerComponent implements OnInit, AfterViewInit  {

  private selectedX: number;
  private selectedY: number;
  public selectedAddressToSetLocation: number = 0;
  public addressList: AdressInformation[];
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  public path3: DisplayPathModel;
  public inputCustomStyle: InputCustomStyle;

  public formControl = new FormControl();

  constructor(private router: Router,
    private activeRouting: ActivatedRoute,
    private numberFormaterService: NumberFormaterService) { }

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


    this.map.on("click", (e: any) => {
      this.selectedX = e.latlng.lat;
      this.selectedY = e.latlng.lng;
    });
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

  public addNewAddress() {
    const marker = L.marker([this.selectedX, this.selectedY]);

    this.map.addLayer(marker);
    if(this.addressList[this.selectedAddressToSetLocation].layer) this.map.removeLayer(this.addressList[this.selectedAddressToSetLocation].layer);

    this.addressList[this.selectedAddressToSetLocation].location = new Location(this.selectedX, this.selectedY);
    this.addressList[this.selectedAddressToSetLocation].layer = marker;
  }

  public removeAddress(index: number) {
    if(this.addressList[index].layer) this.map.removeLayer(this.addressList[index].layer);
    if(this.addressList.length == 1) {
      this.addressList[0] = new AdressInformation;
    } else {
      this.addressList.splice(index, 1);
    }
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('ساخت پروژه', true, 'createProject/selectProjectType');
    this.path2 = new DisplayPathModel('اطلاعات پروژه', true, 'createProject/selectProjectType');
    this.path3 = new DisplayPathModel('انتخاب موقعیت', false, '');
  }


  public goBack() {
    history.back();
  }

  public returnSelectedAddressNumber(): string {
    return this.numberFormaterService.covertToFrNumber(this.selectedAddressToSetLocation + 1);
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

    this.selectedAddressToSetLocation = this.addressList.length - 1;
  }

  public beckAndSaveLocation() {
    let projectType = this.activeRouting.snapshot.queryParamMap.get('type');
    let id = this.activeRouting.snapshot.queryParamMap.get('targetId');

    this.router.navigate(['../../createProject/startCreatProject'], {queryParams: {locations: JSON.stringify(this.getListLocation(this.addressList)), type: projectType, targetId: id}})
    setTimeout(() => {
      document.getElementById('locationInformation')?.click();
    }, 200);
  }

  public getInputControler(index: number): FormControl {
    return this.addressList[index].titleControler;
  }

  public getTitleAddress(index: number): string {
    if(this.addressList[index].location) {
      return (this.addressList[index].location.x_pos.toString()).substring(0, 5)

    + ' - ' + (this.addressList[index].location.y_pos.toString()).substring(0, 5)
  }
    else return 'تایین نشده';
  }

  public setSelectedAddress(index: number) {
    this.selectedAddressToSetLocation = index;
  }

  public checkAddNewAddress(): boolean {
    return !this.addressList[this.addressList.length - 1].layer;
  }

  private getListLocation(addressInfo: AdressInformation[]): Location[] {
    let locations = new Array<Location>();
    for(let i=0; i<addressInfo.length; i++) {
      locations.push(addressInfo[i].location);
    }
    return locations;
  }
 }


export class AdressInformation {
  titleControler: FormControl;
  location: Location;
  layer: any;

  constructor() {
    this.layer = '';
    this.titleControler = new FormControl();
  }
}

export class Location {
  x_pos: number;
  y_pos: number;
  constructor(x: number, y: number) {
    this.x_pos = x;
    this.y_pos = y;
  }
}
