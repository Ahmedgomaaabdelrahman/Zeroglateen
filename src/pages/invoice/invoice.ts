import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
