import { HandleModalService } from '../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor(private handleModalService : HandleModalService) { }

  ngOnInit(): void {
  }

  public openMdalAddCompony(){
    this.handleModalService.openModal('add-company-modal');
  }

}
