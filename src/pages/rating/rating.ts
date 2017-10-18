import { OrdermapPage } from './../ordermap/ordermap';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import {  NavController, NavParams ,ViewController} from 'ionic-angular';



@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
   //this.navCtrl.push(OrdermapPage); 
    // this.navCtrl.setRoot(HomePage);
  }
}
