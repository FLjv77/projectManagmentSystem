import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-user-user-name',
  templateUrl: './current-user-user-name.component.html',
  styleUrls: ['./current-user-user-name.component.scss']
})
export class CurrentUserUserNameComponent implements OnInit {
  @Input() styleUserName: string;
  @Input() userName: string;
  constructor() { }

  ngOnInit(): void {
  }
}
