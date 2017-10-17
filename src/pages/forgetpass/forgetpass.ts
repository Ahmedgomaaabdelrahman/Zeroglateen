import { UserProvider } from './../../providers/user';
import { Component } from '@angular/core';
import {  NavController, NavParams,ViewController } from 'ionic-angular';
import { CommonProvider } from './../../providers/common';

@Component({
  selector: 'page-forgetpass',
  templateUrl: 'forgetpass.html',
})
export class ForgetpassPage {
public email:any;
  constructor(public viewCtrl : ViewController ,public common : CommonProvider,public navCtrl: NavController, public navParams: NavParams,public userProvider:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetpassPage');
  }
sendemail(){
  this.userProvider.forgetPassword(this.email).subscribe((res)=>{
    if(res.error){
      this.common.presentToast(res.error);
      console.log(res.error);
    }else{
      this.common.presentToast(res.Message);
      console.log(res.Message);
      this.viewCtrl.dismiss();
    }
  });
 
}

diss(){
  this.viewCtrl.dismiss();
}
}
