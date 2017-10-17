import { UserProvider } from './../../providers/user';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  
  public name : string;
  public email: any;
  public phone : any;
  public password : any;
  public confirm_pass : any;
  constructor(public userService :UserProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  register(){
      this.userService.registerUesr(this.name,this.email,this.phone,this.password,this.confirm_pass).subscribe((res)=>{
        console.log(res);
        this.navCtrl.push(HomePage);
      });

   
  }

}
