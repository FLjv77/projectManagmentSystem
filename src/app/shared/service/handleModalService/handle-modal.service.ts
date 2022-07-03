import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleModalService {

  constructor() { }

  public openModal(id: string) {
    const modal = document.getElementById(id);
    console.log(id);
    modal?.removeAttribute('class');
    modal?.classList.add('five');
  }
}
