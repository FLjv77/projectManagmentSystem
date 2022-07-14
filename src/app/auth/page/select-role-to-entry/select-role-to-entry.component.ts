import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-select-role-to-entry',
  templateUrl: './select-role-to-entry.component.html',
  styleUrls: ['./select-role-to-entry.component.scss', '../login-user/login-user.component.scss']
})
export class SelectRoleToEntryComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goToDashboard() {
    this.router.navigate(['../../dashboard/home']);
  }

}
