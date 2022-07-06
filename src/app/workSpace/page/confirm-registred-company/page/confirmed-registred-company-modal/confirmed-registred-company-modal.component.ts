import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmed-registred-company-modal',
  templateUrl: './confirmed-registred-company-modal.component.html',
  styleUrls: ['./confirmed-registred-company-modal.component.scss']
})
export class ConfirmedRegistredCompanyModalComponent implements OnInit {

  @Input() modalState: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    const modal = document.getElementById('confirmed-company');
    modal?.classList.add('out');
  }
}