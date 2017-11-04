import { MainProvider } from './../../providers/main';
import { HomePage } from './../home/home';
import { UserProvider } from './../../providers/user';
import { SigntypesPage } from './../signtypes/signtypes';
import { ForgetpassPage } from './../forgetpass/forgetpass';
import { Component } from '@angular/core';
import {  NavController, NavParams,ModalController } from 'ionic-angular';
import { CommonProvider } from '../../providers/common';
import {TranslateService} from "@ngx-translate/core";
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public email:any;
  public password:any;
  MainProvider=MainProvider;
  constructor(public common:CommonProvider,public translate:TranslateService,
    public navCtrl: NavController, public navParams: NavParams,public modalCtrl :ModalController,
    public userProvider:UserProvider,afd: AngularFireDatabase) {
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
       this.common.traslateandToast(res.error);
      }
      else{
        this.translate.get('Login Sucessfully').subscribe(
          value => {
            this.common.traslateandToast(value);
            this.MainProvider.sideMenu=true;
            this.userProvider.user = res;
            console.log(res);
            this.userProvider.userStorageSave(res);
          });
        this.navCtrl.setRoot(HomePage);
      }
     
    });
    
  }
 
}
