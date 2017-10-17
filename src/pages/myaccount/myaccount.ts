import { Component } from '@angular/core';
import {  NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html',
})
export class MyaccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaccountPage');
  }
  openmenu(){
    this.menuCtrl.toggle();
  }
}
