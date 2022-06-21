import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovery-resources',
  templateUrl: './recovery-resources.component.html',
  styleUrls: ['./recovery-resources.component.scss','../../project-creation-levels.component.scss']
})
export class RecoveryResourcesComponent implements OnInit {

  public resourceNameFormControl = new FormControl();
  public addressResourceFormControl = new FormControl();
  public TimeResourceFormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
