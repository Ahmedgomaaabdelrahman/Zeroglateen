import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

  constructor(public translate:TranslateService,public http: Http,public toastCtrl: ToastController) {
    console.log('Hello CommonProvider Provider');
  }
 
  presentToast(value) {
    let toast = this.toastCtrl.create({
      message: value,
      duration: 2500
    });
    toast.present();
  }
  traslateandToast(message :any){ 
    this.translate.get(message).subscribe(
    value => {
      this.presentToast(value);
    });}
 
}
