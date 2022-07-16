import { InputCustomStyle } from '../component/input-style/input-style.component';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile-modal',
  templateUrl: './company-profile-modal.component.html',
  styleUrls: ['./company-profile-modal.component.scss']
})
export class CompanyProfileModalComponent implements OnInit {

  public inputCustomStyle: InputCustomStyle;
  public companyNameFormControl = new FormControl();
  public companyDescriptionFormControl = new FormControl();
  file: File;
  imgURL: string;

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
    const modal = document.getElementById('company-profile-modal');
    modal?.classList.add('out');
  }

  async onChange(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader);
      this.imgURL = reader.result as string;
    }
    reader.readAsDataURL(this.file)
  }
}
