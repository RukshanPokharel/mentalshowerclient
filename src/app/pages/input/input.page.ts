/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { RoomZone } from 'src/app/models/RoomZone.model';
import { AdminService } from '../../services/admin.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  public roomNo: string;
  public zone: string;
  public AQ: string;
  public Humid: string;
  public Temp: string;

  // public roomZone: RoomZone;
  constructor(
    private adminservice: AdminService,
    private alertCtrl: AlertController,
    public router: Router
  ) {}

  ngOnInit() {
    this.GetZoneDataToStorage();
  }
  GetZoneDataToStorage() {
    this.adminservice.getZoneData().then((data) => {
      this.roomNo = data.roomNo;
      this.zone = data.zoneNo;
    });
  }
  getTemperature(data) {
    this.Temp = data;
    this.adminservice.saveTempDataToStorage(this.Temp);
  }
  getHumid(data) {
    this.Humid = data;
    this.adminservice.saveHumidDataToStorage(this.Humid);
  }
  getAQ(data) {
    this.AQ = data;
    this.adminservice.saveAQDataToStorage(this.AQ);
  }
  SaveClimateDataToStorage() {
    this.adminservice.postInput();
    this.presentAlert();
  }

  async presentAlert() {
    let alert = this.alertCtrl.create({
      // title: 'Low battery',
      // subTitle: '10% of battery remaining',
      // buttons: ['Dismiss'],
      header: 'Climate Control',
      subHeader:
        'Thank you for submitting your response. Take out our quiz for the app and earn exciting badges',
      buttons: [
        {
          text: 'Dismiss',
          handler: () => {
            this.router.navigate(['home']);
          },
        },
      ],
    });
    (await alert).present();
  }
}
