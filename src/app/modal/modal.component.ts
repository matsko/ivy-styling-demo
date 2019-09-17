import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @HostBinding('style')
  public styles = {
    width: '90%',
    height: '90%',
   'box-shadow': '0 0 10px black',
  };
}
