import { Component, OnInit } from '@angular/core';
import { DisplayPathModel } from '../../../shared/model/displayPathModel';

@Component({
  selector: 'app-home-super-visor',
  templateUrl: './home-super-visor.component.html',
  styleUrls: ['./home-super-visor.component.scss',
  '../../../workSpace/page/confirm-registred-company/confirm-registred-company.component.scss',
  '../../../advancedSearch/page/advanced-search-according-to-allocation/advanced-search-according-to-allocation.component.scss',
  '../../../../assets/style/base.scss'
]
})
export class HomeSuperVisorComponent implements OnInit {
  public path1: DisplayPathModel;
  public path2: DisplayPathModel;
  constructor() { }

  ngOnInit(): void {
    this.initDisplayPath();
  }

  private initDisplayPath() {
    this.path1 = new DisplayPathModel('داشبورد', false, '');
    this.path2 = new DisplayPathModel('خانه', false, '');
  }

}
