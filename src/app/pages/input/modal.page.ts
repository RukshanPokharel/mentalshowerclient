import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  constructor(private mdlCtrl: ModalController) {}
  dismissModal() {
    this.mdlCtrl.dismiss();
  }
}
