import { HomePage } from './../home/home';
import { UserProvider } from './../../providers/user';
import { SigntypesPage } from './../signtypes/signtypes';
import { ForgetpassPage } from './../forgetpass/forgetpass';
import { Component } from '@angular/core';
import {  NavController, NavParams,ModalController } from 'ionic-angular';
import { CommonProvider } from '../../providers/common';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public email:any;
  public password:any;
  constructor(public common:CommonProvider,public translate:TranslateService,public navCtrl: NavController, public navParams: NavParams,public modalCtrl :ModalController,public userProvider:UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  forgetpass(){
    let modal = this.modalCtrl.create(ForgetpassPage);
    modal.present();
  }
  signType(){
    this.navCtrl.push(SigntypesPage);
  }
  login(){
    this.userProvider.loginUser(this.email,this.password).subscribe((res)=>{
      if(res.error){
       this.common.presentToast(res.error);
      }
      else{
        this.translate.get('Login Sucessfully').subscribe(
          value => {
            this.common.presentToast(value);
          });
        this.navCtrl.push(HomePage);
      }
     
    });
  }
}
