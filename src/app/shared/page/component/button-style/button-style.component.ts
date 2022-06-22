import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-style',
  templateUrl: './button-style.component.html',
  styleUrls: ['./button-style.component.scss']
})
export class ButtonStyleComponent implements OnInit {
  @Input() buttonText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
