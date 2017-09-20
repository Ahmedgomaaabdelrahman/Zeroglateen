import { SignsupplierPage } from './../signsupplier/signsupplier';
import { SignproductivePage } from './../signproductive/signproductive';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SigntypesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signtypes',
  templateUrl: 'signtypes.html',
})
export class SigntypesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigntypesPage');
  }
  signup(){
    this.navCtrl.push(SignupPage);
  }
  productive(){
    this.navCtrl.push(SignproductivePage);
  }
  supplier(){
    this.navCtrl.push(SignsupplierPage);
  }
}
