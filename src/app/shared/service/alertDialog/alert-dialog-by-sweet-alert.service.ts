import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertDialogBySweetAlertService {

  constructor() { }

  public showSuccessAlert(message: string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        title: 'set-font-Raymon',
        confirmButton: 'set-font-vazir button-project ',
        container: 'set-font-vazir',
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 3500,
      background: '#f7edff',
      backdrop: `
      rgba(0,0,0,0)
    `
    })
  }
 }
