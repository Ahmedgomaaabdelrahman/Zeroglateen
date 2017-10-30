import { MapPage } from './../map/map';
import { PaymentPage } from './../payment/payment';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-addlocation',
  templateUrl: 'addlocation.html',
})
export class AddlocationPage {
   public map = MapPage;
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddlocationPage');
   
  }
  ionViewWillEnter(){
    console.log(this.map.lat);
    console.log(this.map.lng);
    
  }
  gopay(){
    this.navCtrl.push(PaymentPage);
  }

  getMap(){
    this.navCtrl.push(MapPage);
  }
}
