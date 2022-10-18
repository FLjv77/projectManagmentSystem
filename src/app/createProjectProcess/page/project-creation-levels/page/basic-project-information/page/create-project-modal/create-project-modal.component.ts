import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-project-modal',
  templateUrl: './create-project-modal.component.html',
  styleUrls: ['./create-project-modal.component.scss','../../../../../../../../assets/style/modalStyle.scss'
,'../../../../../../../userManagement/page/add-user-modal/add-user-modal.component.scss']
})
export class CreateProjectModalComponent implements OnInit {

  @Output() createProject = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public submit(state: boolean){
    if (state==false) {
      this.closeModal();
      this.createProject.emit(false);
    }
    else {
      this.closeModal();
      this.createProject.emit(true);
    }

  }

  public closeModal(){
    const modal = document.getElementById('create-project');
    modal?.classList.add('out');
  }

}
