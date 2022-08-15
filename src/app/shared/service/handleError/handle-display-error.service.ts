import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HandleDisplayErrorService {
  constructor() {}

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

  public showError(handleError: HandelErrorTDO, errorMessage: string) {
    let message = errorMessage;
    /*
          customClass: {
        title: 'set-font-Raymon text-lite',
        confirmButton: 'formacell-btn-11-lite',
        container: 'set-font-vazir text-lite',
        footer: 'set-font-vazir text-lite',
        content: 'set-font-vazir text-lite'
      },
    */
    Swal.fire({
      imageUrl: 'https://nortino-cute-statue-image.s3.ir-thr-at1.arvanstorage.com/Access%20error.svg',
      imageWidth: 250,
      imageAlt: 'Custom image',
      title: 'مشکلی هست',
      text: message,
      showConfirmButton: true,
      confirmButtonText: 'باشه',
      padding: '2em',
      timer: 4000,
      background: 'rgba(0,0,0,0.7)',
      allowOutsideClick: false,
      timerProgressBar: true,
      footer: 'تا چند ثانیه دیگه به صفحه قبلی برگشت داده میشی'
    }).then((result: any) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        // document.location.href  = handleError.link;
        history.back();
      }
      else {
        // document.location.href  = handleError.link;
        history.back();
      }
    });


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
