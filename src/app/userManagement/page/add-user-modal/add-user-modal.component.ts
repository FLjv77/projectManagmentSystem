import { UntypedFormControl } from '@angular/forms';
import { InputCustomStyle } from './../../../shared/page/component/input-style/input-style.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModalComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public userNameFormControl = new UntypedFormControl();
  public userRoleFormControl = new UntypedFormControl();
  public userEmailFormControl = new UntypedFormControl();

  constructor() { }

  ngOnInit(): void {
    this.initInputStyle();
  }

  private initInputStyle() {
    this.inputCustomStyle = new InputCustomStyle(
      '#AEAEAE', '#AEAEAE', '#AEAEAE'
    )
  }

  closeModal() {
    const modal = document.getElementById('add-user-modal');
    modal?.classList.add('out');
  }
}
