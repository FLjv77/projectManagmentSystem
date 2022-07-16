import { DisplayPathModel } from './../../../shared/model/displayPathModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public path1: DisplayPathModel;
  public path2: DisplayPathModel;

  constructor() { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('کالری', false, '');
    this.path2 = new DisplayPathModel('مشاهده گالری', false, '');
  }

}
