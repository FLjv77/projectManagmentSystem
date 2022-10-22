import { url } from 'src/assets/url/url';
import { AlertDialogBySweetAlertService } from 'src/app/shared/service/alertDialog/alert-dialog-by-sweet-alert.service';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { AuthService } from '../../service/authConnectToApi/auth.service';
import { URL } from 'url';

@Component({
  selector: 'app-select-role-to-entry',
  templateUrl: './select-role-to-entry.component.html',
  styleUrls: ['./select-role-to-entry.component.scss', '../login-user/login-user.component.scss']
})
export class SelectRoleToEntryComponent implements OnInit {

  constructor(private authService:AuthService,
    private router: Router,
    private alertDialogBySweetAlertService:AlertDialogBySweetAlertService
  ) { }

  ngOnInit(): void {
  }

  public goToDashboard(url1: string,role: string) {
    this.authService.AmIAllowedToMakeThisClaim(role).subscribe((res: ApiResult<boolean>)=>{
      console.log(res.data);
      if (res.data == true) {
        this.router.navigate([url1]);
      }
      else {
        this.alertDialogBySweetAlertService.showErrorAlert('شما دسترسی لازم برای این بخش را ندارید.')
      }
    });
  }

}
