import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Questions } from 'src/app/models/questions.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  public questions: Questions[];

  constructor(
    private mdlCtrl: ModalController,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.adminService.getAllHelpQuestion().subscribe(
      (data) => {
        this.questions = data;
        console.log(this.questions);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  dismissModal() {
    this.mdlCtrl.dismiss();
  }
}
