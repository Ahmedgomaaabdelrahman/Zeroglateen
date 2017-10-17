import { UserProvider } from './../../providers/user';
import { Component } from '@angular/core';
import {  NavController, NavParams,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-forgetpass',
  templateUrl: 'forgetpass.html',
})
export class ForgetpassPage {
public email:any;
  constructor(public viewCtrl : ViewController ,public navCtrl: NavController, public navParams: NavParams,public userProvider:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetpassPage');
  }
sendemail(){
  this.userProvider.forgetPassword(this.email).subscribe((res)=>{
console.log(res);
this.viewCtrl.dismiss();
  });
 
}
}
