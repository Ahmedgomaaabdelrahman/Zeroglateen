import { TranslateService } from '@ngx-translate/core';
import { OrdermapPage } from './../ordermap/ordermap';
import { InvoicePage } from './../invoice/invoice';
import { Component } from '@angular/core';
import {  NavController, NavParams,ModalController } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
public flag:boolean =false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl :ModalController,public translate:TranslateService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  goinvoice(){
    if(this.flag === false){
      let modal = this.modalCtrl.create(InvoicePage);
      modal.present();
      this.flag = true;
      this.translate.get('Track Order').subscribe(
        value => {
          document.getElementById('btn').textContent =value;
     
        });
      
    }
    else if(this.flag == true){
      
      this.navCtrl.setRoot(OrdermapPage);
      this.flag = false;
    }
}
}
