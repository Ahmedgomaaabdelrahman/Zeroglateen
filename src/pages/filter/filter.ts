import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
