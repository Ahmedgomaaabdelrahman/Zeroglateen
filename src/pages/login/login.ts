import { ForgetpassPage } from './../forgetpass/forgetpass';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl :ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  forgetpass(){
    let modal = this.modalCtrl.create(ForgetpassPage);
    modal.present();
  }
}
