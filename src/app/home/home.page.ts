/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-var */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable max-len */
/* eslint-disable quote-props */
import { Component } from '@angular/core';
import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { IntroModalPage } from '../pages/intro-modal/intro-modal.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', 'home.page.css'],
})

export class HomePage {

  dataReturned: any;
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;

  constructor(
    private barcodeScanner: BarcodeScanner,
    public router: Router,
    public modalController: ModalController,
    public modalController2: ModalController,
    public modalController3: ModalController,
    public modalController4: ModalController,
    public modalController5: ModalController,
    ) {}




    // For the modal part
    async openModal() {
      const modal = await this.modalController.create({
        component: IntroModalPage,
        componentProps: {
          'paramID': '1',
          'paramTitle': 'For the introduction page:',
          'paramText': 'There is not only a start survey button, but also a 5 step roadmap, shown below',
          'paramImgIntro': '../../assets/icon/intro.png',
        }
      });

      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          this.dataReturned = dataReturned.data;
          //alert('Modal Sent Data :'+ dataReturned);
        }
      });

      return await modal.present();
    }

    async openModal2() {
      const modal2 = await this.modalController2.create({
        component: IntroModalPage,
        componentProps: {
          'paramID': '2',
          'paramTitle2': 'For the gender section:',
          'paramText2': 'There will be 3 avatar symbols - male, female or other.',
          'paramImgGender': '../../assets/icon/genderSection.png',
        }
      });

      modal2.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          this.dataReturned = dataReturned.data;
          //alert('Modal Sent Data :'+ dataReturned);
        }
      });

    return await modal2.present();
    }

    async openModal3() {
      const modal3 = await this.modalController3.create({
        component: IntroModalPage,
        componentProps: {
          'paramID': '3',
          'paramTitle3': 'For the room and zone section:',
          'paramText3': 'You can choose which room you are in, with the given zones aftewards',
          'paramImgRoom': '../../assets/icon/roomMap.png',
        }
      });

      modal3.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          this.dataReturned = dataReturned.data;
          //alert('Modal Sent Data :'+ dataReturned);
        }
      });

      return await modal3.present();
    }

    async openModal4() {
      const modal4 = await this.modalController4.create({
        component: IntroModalPage,
        componentProps: {
          'paramID': '4',
          'paramTitle4': 'For the user input section:',
          'paramText4': 'You would be able to choose from level 1 to 6 in the 3 categories:',
          'paramImgInputs': '../../assets/icon/input.png',
        }
      });

      modal4.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          this.dataReturned = dataReturned.data;
          //alert('Modal Sent Data :'+ dataReturned);
        }
      });

      return await modal4.present();
    }

    async openModal5() {
      const modal5 = await this.modalController5.create({
        component: IntroModalPage,
        componentProps: {
          'paramID': '5',
          'paramTitle5': 'For the results before finish page:',
          'paramText5': 'Here you will be able too see your inputs for the air quality, temperature and humidty. The room and zone number will be dislayed in the top of the page. Then the finish button as last confirmation.',
        }
      });

      modal5.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          this.dataReturned = dataReturned.data;
          //alert('Modal Sent Data :'+ dataReturned);
        }
      });

      return await modal5.present();
    }

    // Submit button
    submitForm() {
      this.router.navigate(['login']);
    }

    // Scanner - not working
    scan() {
      const options: BarcodeScannerOptions = {
        preferFrontCamera: false,
        showFlipCameraButton: true,
        showTorchButton: true,
        torchOn: false,
        prompt: 'Place a barcode inside the scan area',
        resultDisplayDuration: 500,
        formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
        orientation: 'portrait',
      };

      this.scannedData = null;
      this.barcodeScanner
        .scan(options)
        .then((barcodeData) => {
          console.log('Barcode data', barcodeData);
          this.scannedData = barcodeData;
        })
        .catch((err) => {
          console.log('Error', err);
        });
  }

  createBarcode() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.inputData)
      .then(
        (encodedData) => {
          console.log(encodedData);
          this.encodedData = encodedData;
        },
        (err) => {
          console.log('Error occured : ' + err);
        }
      );
  }


}
