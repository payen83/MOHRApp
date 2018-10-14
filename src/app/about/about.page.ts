import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  customAlertOptions: any = {
    header: 'Select year',
    translucent: true
  };
  constructor(private alertCtrl: AlertController){

  }

  async presentAlertRadio() {

    
    const alert = await this.alertCtrl.create({
      header: 'Select year',
      inputs: [
        {
          name: 'year',
          type: 'radio',
          label: '2018',
          value: '2018',
          checked: true
        },
        {
          name: 'year',
          type: 'radio',
          label: '2017',
          value: '2017'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'OK',
          handler: (year) => {
            console.log(year);
          }
        }
      ]
    });

    await alert.present();
  }
}
