import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HandleDisplayErrorService {
  constructor(private router: Router) {}

  public getMessage(code: number): string {
    let res = '';
    switch (code) {
      case 500 : {
        res = 'خطایی در سرور رخ داده';
      } break;
      case 400 : {
        res = 'پارامتر های ارسالی معتبر نیستند';
      } break;
      case 404 : {
        res = 'درخوست شما یافت نشد';
      } break;
      case 204 : {
        res = 'لیست خالی است';
      } break;
      case 409 : {
        res = 'خطایی در پردازش رخ داده';
      } break;
      case 401 : {
        res = 'احراز هویت به درستی انجام نشده';
      } break;
      case 402 : {
        res = 'خطای اهراز هویت خودکار';
      } break;
      case 403 : {
        res = 'خطای ممنوع یا سطح دسترسی';
      } break;
      case 303 : {
        res = 'خطای تکراری بودن پارامتر';
      } break;
      case 422 : {
        res = 'موجود غیر قابل پردازش';
      } break;
    }
    return res;
  }

  public showError(errorCode: number) {
    let message = this.getMessage(errorCode);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        title: 'set-font-Raymon',
        confirmButton: 'set-font-vazir button-project ',
        container: 'set-font-vazir',
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      icon: 'error',
      title: 'مشکلی هست',
      text: message,
      cancelButtonColor: '#d33',
      confirmButtonText: 'متوجه شدم',
    }).then((result: any) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        // document.location.href  = handleError.link;
      }
      else {
        // document.location.href  = handleError.link;
      }
    });

    if(errorCode == 401) {
      setTimeout(() => {
        this.router.navigate(['../../auth/loginUser']);
      }, 1000);
    }
  }
}


export enum handleErrorInterface {
  snackbar, toast, sweetAlert
}
export class HandelErrorTDO {
  constructor(status: handleErrorInterface, link: string, time: boolean) {
    this.link = link;
    this.status = status;
    this.timing = time;
  }
  status: handleErrorInterface;
  link: string;
  timing: boolean;
}
