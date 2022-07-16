import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-upload-file-input',
  templateUrl: './upload-file-input.component.html',
  styleUrls: ['./upload-file-input.component.scss']
})
export class UploadFileInputComponent implements OnInit {
  @Input() inputLabel: string;
  @Input() inputFormControl: FormControl;
  public fileUrl: string;
  public loading: boolean = false;
  public filePath: string;
  public file: File;

  constructor() { }

  ngOnInit(): void {
    this.initFilePath();
  }

  private initFilePath() {
    this.filePath = this.inputLabel;
  }
  async onChange(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.fileUrl = reader.result as string;
      this.filePath = event.target.files[0].name;
    }
    reader.readAsDataURL(this.file)
  }

  public onUpload(){}

}
