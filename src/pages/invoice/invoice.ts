import { RatingPage } from './../rating/rating';
import { Component } from '@angular/core';
import {  NavController, NavParams,ViewController,ModalController } from 'ionic-angular';



@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {

  constructor(public navCtrl: NavController,public modalCtrl :ModalController,public navParams: NavParams,public viewCtrl : ViewController) {
    console.log(navParams.get('invoice'));
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad InvoicePage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

  goRate(){
    let modal = this.modalCtrl.create(RatingPage);
    modal.present();
}
}
