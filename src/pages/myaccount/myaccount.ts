import { CommonProvider } from './../../providers/common';
import { UserProvider } from './../../providers/user';
import { Component } from '@angular/core';
import {  NavController, NavParams, MenuController } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
/**
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html',
})
export class MyaccountPage {

  constructor(public translate :TranslateService, public common:CommonProvider,public userProvider:UserProvider,public navCtrl: NavController, public navParams: NavParams,private menuCtrl:MenuController) {
    console.log(this.userProvider.user.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaccountPage');
  }
  openmenu(){
    this.menuCtrl.toggle();
  }
  updateUser(inputs:any){
     this.userProvider.updateUser(inputs.name,inputs.email,inputs.phone,inputs.password,inputs.confirm_password).subscribe(
       (res)=>{
        if(res.id)
        {
          this.translate.get('Updated Sucessfully').subscribe(
            value => {
              this.common.presentToast(value);
              this.userProvider.user = res;
              this.userProvider.userStorageSave(res);
              this.navCtrl.pop();
            });
        }
        else
          this.common.presentToast(res.error);         
        });
  }
}
