import { CommonProvider } from './../../providers/common';
import { UserProvider } from './../../providers/user';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
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
  constructor(public translate:TranslateService,public common:CommonProvider,public userService :UserProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  register(){
      this.userService.registerUesr(this.name,this.email,this.phone,this.password,this.confirm_pass).subscribe((res)=>{
        if(res.error){
         this.common.traslateandToast(res.error);
         console.log(res.error);
        }
        else{
          this.translate.get('Registered Sucessfully').subscribe(
            value => {
              this.common.traslateandToast(value);
              this.userService.user = res;
              this.userService.userStorageSave(res);
            });
          this.navCtrl.push(HomePage);
        }
       
      });

   
  }

}
