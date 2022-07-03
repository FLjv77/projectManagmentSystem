import { HandleModalService } from './../../../shared/service/handleModalService/handle-modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiw-user-list',
  templateUrl: './veiw-user-list.component.html',
  styleUrls: ['./veiw-user-list.component.scss']
})
export class VeiwUserListComponent implements OnInit {

  constructor(private handleModalService : HandleModalService) { }

  ngOnInit(): void {
  }

  public openMdalAddUser(){
    this.handleModalService.openModal('add-user-modal');
  }
}
