import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the OrdermapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-ordermap',
  templateUrl: 'ordermap.html',
})
export class OrdermapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl:MenuController) {
    this.menuCtrl.swipeEnable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdermapPage');
  }
 finish(){
   this.navCtrl.push(HomePage);
 
 }
}
